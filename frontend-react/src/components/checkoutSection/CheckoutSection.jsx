import ProductCard from "../productCard/ProductCard";
import './CheckoutSection.css';
import {getProductById} from "../../services/ProductService";
import {useEffect, useState} from "react";


function CheckoutSection({productId}) {

    const [product, setProduct] = useState({});

    useEffect(() => {
        getProductById(productId).then(foundProduct => setProduct(foundProduct));
    }, [])

    console.log(product);



    return (
        <section className={'checkout-section'}>
            <div className={'product-choices'}>
                <h1>qwerqwer</h1>
            </div>
            <div className={'checkout'}>
                <ProductCard imageUrl={'/images/oneDayCourseCard.jpeg'} title={'qwerqwer'} imageAlt={'asdfasdf'} description={'Lorem Ipsum cha cha xx'}/>
            </div>
        </section>
    )
};

export default CheckoutSection;
