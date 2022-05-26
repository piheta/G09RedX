import './CheckoutSection.css';
import {FormControl, FormControlLabel, Radio, RadioGroup} from "@mui/material";
import {useEffect, useState} from "react";

function CheckoutSection({product}) {

    function getTomorrowsDate() {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        return tomorrow.toISOString().split('T')[0];
    }

    function handleGroupChange(groupSize) {
        if (groupSize === 1) {
            setPrice(product.basePrice);
        } else {
            setPrice(product.groupPrice);
        }
    }

    const [price, setPrice] = useState('');
    const PRODUCT_IDS = [1, 2, 3];
    let relatedProductIds;

    useEffect(() => {
        setPrice(product.basePrice);
        relatedProductIds = PRODUCT_IDS.filter(id => id !== product.productId);
    }, [product]);


    return (
        <section className={'checkout-section'}>
            <div className={'product'}>
                <img className={'product-image'} src={'/images/squoosed-product' + product.productId + '.jpg'}/>
                <div className={'related-products'}>
                    {
                        relatedProductIds.map((id) => {
                            <div className={'related-product'}>
                                <img className={'related-product-images'} src={'/images/squoosed-product.jpg'}/>
                                <p className={'related-product-tag'}>Two Day Course</p>
                            </div>
                        })
                    }
                </div>
                <div className={'related-products'}>
                    <div className={'related-product'}>
                        <img className={'related-product-images'} src={'/images/squoosed-product2.jpg'}/>
                        <p className={'related-product-tag'}>Two Day Course</p>
                    </div>
                    <div className={'related-product'}>
                        <img className={'related-product-images'} src={'/images/squoosed-product3.jpg'}/>
                        <p className={'related-product-tag'}>Short consultation</p>
                    </div>
                </div>
            </div>
            <FormControl>
                <RadioGroup defaultValue={'Morning'}>
                    <h3>Morning/Evening course</h3>
                    <FormControlLabel
                        className={'label'}
                        control={<Radio />}
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
                <RadioGroup defaultValue={1} onChange={(event) => handleGroupChange(event.target.value)}>
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
