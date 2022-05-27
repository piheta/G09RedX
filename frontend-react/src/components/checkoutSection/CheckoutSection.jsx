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

    function handleGroupChange(groupSize) {
        console.log(groupSize === 1);
        console.log(parseInt(groupSize) === 1);
        if (groupSize === 1) {
            setPrice(currentProduct.basePrice);
        } else {
            setPrice(currentProduct.groupPrice);
        }
    }

    const [price, setPrice] = useState('');
    const [currentProduct, setCurrentProduct] = useState({});
    const [relatedProducts, setRelatedProducts] = useState([]);
    const navigate = useNavigate();

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
        <section className={'checkout-section'}>
                <div className={'product'}>
                    <img className={'product-image'} src={'/images/squoosed-product' + productId + '.jpg'}/>
                    <div className={'related-products'}>
                        {
                            relatedProducts.length > 0 ? relatedProducts.map((product) => {
                                return (
                                    <a onClick={() => navigate('/checkout/' + product.productId)}
                                       className={'related-product'}>
                                        <img alt={''} className={'related-product-images'}
                                             src={'/images/squoosed-product' + product.productId + '.jpg'}/>
                                        <p className={'related-product-tag'}>{product.productName}</p>
                                    </a>
                                )
                            }) : 'Loading'
                        }
                    </div>
                </div>
                <form className={'choices'}>
                    <h1 className={'product-title'}>{currentProduct.productName}</h1>
                    <RadioGroup defaultValue={'Morning'}>
                        <h3 className={'choice-title'}>Time of day</h3>
                        <FormControlLabel
                            control={<Radio sx={{'&.Mui-checked': {color: "#ec361e"}, '& .MuiSvgIcon-root': {fontSize: 25}}} />}
                            label={<label className={'radio-label'}>Morning course</label>}
                            value={'Morning'}
                        />
                        <FormControlLabel
                            control={<Radio sx={{'&.Mui-checked': {color: "#ec361e"}, '& .MuiSvgIcon-root': {fontSize: 25}}}/>}
                            label={<label className={'radio-label'}>Evening course</label>}
                            value={'Evening'}
                        />
                    </RadioGroup>
                    <RadioGroup defaultValue={'Norwegian'}>
                        <h3 className={'choice-title'}>Language</h3>
                        <FormControlLabel
                            control={<Radio sx={{'&.Mui-checked': {color: "#ec361e"}, '& .MuiSvgIcon-root': {fontSize: 25}}}/>}
                            label={<label className={'radio-label'}>Norwegian</label>}
                            value={'Norwegian'}
                        />
                        <FormControlLabel
                            control={<Radio sx={{'&.Mui-checked': {color: "#ec361e"}, '& .MuiSvgIcon-root': {fontSize: 25}}}/>}
                            label={<label className={'radio-label'}>English</label>}
                            value={'English'}
                        />
                    </RadioGroup>
                    <RadioGroup defaultValue={1} onChange={(event) => handleGroupChange(parseInt(event.target.value))}>
                        <h3 className={'choice-title'}>Group size</h3>
                        <FormControlLabel
                            control={<Radio sx={{'&.Mui-checked': {color: "#ec361e"}, '& .MuiSvgIcon-root': {fontSize: 25}}}/>}
                            label={<label className={'radio-label'}>One person</label>}
                            value={1}
                        />
                        <FormControlLabel
                            control={<Radio sx={{'&.Mui-checked': {color: "#ec361e"}, '& .MuiSvgIcon-root': {fontSize: 25}}}/>}
                            label={<label className={'radio-label'}>Five people</label>}
                            value={5}
                        />
                    </RadioGroup>
                    <input type={'date'} min={getTomorrowsDate()} defaultValue={getTomorrowsDate()}/>
                    <h2>{price},-</h2>
                    <button className={'buynow-button'}>BUY NOW</button>
                </form>
        </section>
    )
};

export default CheckoutSection;
