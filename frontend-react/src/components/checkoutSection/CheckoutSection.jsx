import './CheckoutSection.css';
import '../../styles/global.css'
import {FormControl, FormControlLabel, Radio, RadioGroup} from "@mui/material";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";

function CheckoutSection({products, productId}) {

    const [price, setPrice] = useState('');
    const [currentProduct, setCurrentProduct] = useState({});
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [displayModal, setDisplayModal] = useState(false);
    const navigate = useNavigate();


    let choices = {
        timeOfDay: 'Morning',
        language: 'Norwegian',
        groupSize: 1,
        date: getTomorrowsDate(),
    };

    const handleClickOutside = (event) => {
        if (event.target.className === 'checkout-modal' || event.target.className === 'checkout-modal-exit') {
            setDisplayModal(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    function getTomorrowsDate() {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        return tomorrow.toISOString().split('T')[0];
    }

    function handleGroupChange(newGroupSize) {
        if (newGroupSize === 1) {
            setPrice(currentProduct.basePrice);
            choices.groupSize = 1;
        } else {
            setPrice(currentProduct.groupPrice);
            choices.groupSize = 5;
        }
    }

    function handleTimeOfDayChange(newTime) {
        choices.timeOfDay = newTime;
    }

    function handleLanguageChange(newLanguage) {
        choices.language = newLanguage;
    }

    function handleDateChange(newDate) {
        choices.date = newDate;
    }


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
                    <img alt={"Product image"} className={'product-image'}
                         src={'/images/squoosed-product' + productId + '.jpg'}/>
                </div>
                <div className={"choices"}>
                    <form className={''}>
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
                    </form>
                    <button onClick={() => setDisplayModal(true)} className={'buynow-button'}>SIGN UP NOW</button>
                </div>
            </div>
            {
                displayModal ?
                    <div className={"checkout-modal"}>
                        <div className={"checkout-modal-content"}>
                            <span className={"checkout-modal-exit"}>
                                &#10060;
                            </span>
                            <h1>Thank you for the Order!</h1>
                            <p>
                                An email will shortly be sent to you! The Email will consist of information of you're order.
                                We appreciate everyone and wants to make sure every customer gets the best services from us.
                            </p>
                            <table className={"modal-table"}>
                                <caption className={"modal-table-title"}>ORDER SUMMARY</caption>
                                <tr>
                                    <th>Time of day</th>
                                    <th>Language</th>
                                    <th>Group size</th>
                                    <th>Date</th>
                                </tr>
                                <tr>
                                    <td>{choices.timeOfDay}</td>
                                    <td>{choices.language}</td>
                                    <td>{choices.groupSize}</td>
                                    <td>{choices.date}</td>
                                </tr>
                            </table>
                            <h2>{price},-</h2>
                        </div>
                    </div>
                    : null
            }

            <h2 id={'related-products-header'} className={'related-products-header'}>Related products</h2>
            <hr/>
            <div id={'related-products'} className={'related-products'}>
                {
                    relatedProducts.length > 0 ? relatedProducts.map((product) => {
                        return (
                            <a key={product.productId} onClick={() => navigate('/checkout/' + product.productId)}
                               className={'related-product'}>
                                <img alt={''} className={'related-product-images'}
                                     src={'/images/squoosed-product' + product.productId + '.jpg'}/>
                                <p className={'related-product-tag'}>{product.productName}</p>
                            </a>
                        )
                    }) : null
                }
            </div>
        </section>
    )
};

export default CheckoutSection;
