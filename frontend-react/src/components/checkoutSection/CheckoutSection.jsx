import './CheckoutSection.css';
import '../../styles/global.css'
import {FormControl, FormControlLabel, Radio, RadioGroup} from "@mui/material";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";

function CheckoutSection({products, productId}) {

    function getTomorrowsDate() {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        return tomorrow.toISOString().split('T')[0];
    }

    function handleGroupChange(newGroupSize) {
        if (parseInt(newGroupSize) === 1) {
            setPrice(currentProduct.basePrice);
            choices.groupSize = 1;
        } else {
            console.log('here');
            setPrice(currentProduct.groupPrice);
            choices.groupSize = 5;
        }
    }

    const [price, setPrice] = useState('');
    const [currentProduct, setCurrentProduct] = useState({});
    const [relatedProducts, setRelatedProducts] = useState([]);
    const navigate = useNavigate();
    let choices = {
        timeOfDay: 'Morning',
        language: 'Norwegian',
        groupSize: 1,
        date: getTomorrowsDate(),
    };


    function handleTimeOfDayChange(newTime) {
        choices.timeOfDay = newTime;
    };

    function handleLanguageChange(newLanguage) {
        choices.language = newLanguage;
    };

    function handleDateChange(newDate) {
        choices.date = newDate;
    };


    useEffect(() => {
        if (products.length > 0) {
            setCurrentProduct(products.find(product => parseInt(product.productId) === parseInt(productId)));
            setRelatedProducts(products.filter(product => parseInt(product.productId) !== parseInt(productId)));
        }
    }, [products, productId]);

    useEffect(() => {
        if (currentProduct && currentProduct.basePrice) {
            setPrice(currentProduct.basePrice);
        }
    }, [currentProduct, productId]);

    return (
        <section id={'checkout-and-related-products'}>
            <div className={'product-section'}>
                <div className={'product'}>
                    <img className={'product-image'} src={'/images/squoosed-product' + productId + '.jpg'}/>
                </div>
                <form className={'choices'}>
                    <h1 className={'product-title'}>{currentProduct.productName}</h1>
                    <RadioGroup onChange={(event, value) => handleTimeOfDayChange(value)}
                                key={productId + choices.timeOfDay} defaultValue={'Morning'}>
                        <h3 className={'choice-title'}>Time of day</h3>
                        <FormControlLabel
                            control={<Radio
                                sx={{'&.Mui-checked': {color: "#ec361e"}, '& .MuiSvgIcon-root': {fontSize: 25}}}/>}
                            label={<label className={'radio-label'}>Morning course</label>}
                            value={'Morning'}
                        />
                        <FormControlLabel
                            control={<Radio
                                sx={{'&.Mui-checked': {color: "#ec361e"}, '& .MuiSvgIcon-root': {fontSize: 25}}}/>}
                            label={<label className={'radio-label'}>Evening course</label>}
                            value={'Evening'}
                        />
                    </RadioGroup>
                    <RadioGroup onChange={(event, value) => handleLanguageChange(value)}
                                key={productId + choices.language} defaultValue={'Norwegian'}>
                        <h3 className={'choice-title'}>Language</h3>
                        <FormControlLabel
                            control={<Radio
                                sx={{'&.Mui-checked': {color: "#ec361e"}, '& .MuiSvgIcon-root': {fontSize: 25}}}/>}
                            label={<label className={'radio-label'}>Norwegian</label>}
                            value={'Norwegian'}
                        />
                        <FormControlLabel
                            control={<Radio
                                sx={{'&.Mui-checked': {color: "#ec361e"}, '& .MuiSvgIcon-root': {fontSize: 25}}}/>}
                            label={<label className={'radio-label'}>English</label>}
                            value={'English'}
                        />
                    </RadioGroup>
                    <RadioGroup key={productId + choices.groupSize} defaultValue={1}
                                onChange={(event, value) => handleGroupChange(value)}>
                        <h3 className={'choice-title'}>Group size</h3>
                        <FormControlLabel
                            control={<Radio
                                sx={{'&.Mui-checked': {color: "#ec361e"}, '& .MuiSvgIcon-root': {fontSize: 25}}}/>}
                            label={<label className={'radio-label'}>One person</label>}
                            value={1}
                        />
                        <FormControlLabel
                            control={<Radio
                                sx={{'&.Mui-checked': {color: "#ec361e"}, '& .MuiSvgIcon-root': {fontSize: 25}}}/>}
                            label={<label className={'radio-label'}>Five people</label>}
                            value={5}
                        />
                    </RadioGroup>
                    <h3 className={'date-choice-title'}>Choose a date</h3>
                    <input onChange={(event) => handleDateChange(event.target.value)} key={productId + choices.date}
                           className={'date-chooser'} type={'date'} min={getTomorrowsDate()}
                           defaultValue={getTomorrowsDate()}/>
                    <h2 className={'price'}>{price},-</h2>
                    <button className={'buynow-button'}>SIGN UP NOW</button>
                </form>
            </div>
            <h2 id={'related-products-header'} className={'related-products-header'}>Related products</h2>
            <hr/>
            <div id={'related-products'} className={'related-products'}>
                {
                    relatedProducts.length > 0 ? relatedProducts.map((product) => {
                        return (
                            <div className={'related-product'}>
                                <h4>{product.productName}</h4>
                                <a key={product.productId} onClick={() => navigate('/checkout/' + product.productId)}
                                   className={'related-product-image'}>
                                    <img alt={''} className={'related-product-images'}
                                         src={'/images/squoosed-product' + product.productId + '.jpg'}/>
                                    <p className={'related-product-tag'}>{product.productName}</p>
                                </a>
                            </div>
                        )
                    }) : null
                }
            </div>
        </section>
    )
};

export default CheckoutSection;
