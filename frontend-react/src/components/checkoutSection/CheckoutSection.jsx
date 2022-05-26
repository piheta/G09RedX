import './CheckoutSection.css';
import {FormControl, FormControlLabel, Radio, RadioGroup} from "@mui/material";
import {useEffect, useState} from "react";

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
                                <div className={'related-product'}>
                                    <img alt={''} className={'related-product-images'} src={'/images/squoosed-product' + product.productId + '.jpg'}/>
                                    <p className={'related-product-tag'}>{product.productName}</p>
                                </div>
                            )
                        }) : 'Loading'
                    }
                </div>
            </div>
            <FormControl>
                <RadioGroup defaultValue={'Morning'}>
                    <h3>Morning/Evening course</h3>
                    <FormControlLabel
                        className={'label'}
                        control={<Radio/>}
                        label={'Morning course'}
                        value={'Morning'}
                    />
                    <FormControlLabel
                        className={'label'}
                        control={<Radio/>}
                        label={'Evening course'}
                        value={'Evening'}
                    />
                </RadioGroup>
                <RadioGroup defaultValue={'Norwegian'}>
                    <h3>Language</h3>
                    <FormControlLabel
                        className={'label'}
                        control={<Radio/>}
                        label={'Norwegian'}
                        value={'Norwegian'}
                    />
                    <FormControlLabel
                        className={'label'}
                        control={<Radio/>}
                        label={'English'}
                        value={'English'}
                    />
                </RadioGroup>
                <RadioGroup defaultValue={1} onChange={(event) => handleGroupChange(parseInt(event.target.value))}>
                    <h3>Group size</h3>
                    <FormControlLabel
                        className={'label'}
                        control={<Radio/>}
                        label={'One person'}
                        value={1}
                    />
                    <FormControlLabel
                        className={'label'}
                        control={<Radio/>}
                        label={'Five people'}
                        value={5}
                    />
                </RadioGroup>
                <input type={'date'} min={getTomorrowsDate()}/>
                <h2>{price}</h2>
            </FormControl>
        </section>
    )
};

export default CheckoutSection;
