import React, {useEffect, useState} from 'react';
import Nav from "../components/nav/Nav";
import CheckoutSection from "../components/checkoutSection/CheckoutSection";
import ReviewSection from "../components/reviewSection/ReviewSection";
import Footer from "../components/footer/Footer";
import {useParams} from "react-router";
import {getAllProducts, getProductById} from "../services/ProductService";

function ProductPage() {

    let {productId} = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {
        getProductById(productId).then((productData) => {
            setProduct(productData);
        })
    }, [])

    return (
        <div>
            <Nav productId={productId}/>
            <CheckoutSection product={product} productId={productId}/>
            <ReviewSection productId={productId}/>
            <Footer />
        </div>
    );
}

export default ProductPage;
