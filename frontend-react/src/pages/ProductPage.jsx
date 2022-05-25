import React from 'react';
import Nav from "../components/nav/Nav";
import CheckoutSection from "../components/checkoutSection/CheckoutSection";
import ReviewSection from "../components/reviewSection/ReviewSection";
import Footer from "../components/footer/Footer";
import {useParams} from "react-router";

function ProductPage() {

    let {productId} = useParams();


    return (
        <div>
            <Nav productId={productId}/>
            <CheckoutSection productId={productId}/>
            <ReviewSection productId={productId}/>
            <Footer />
        </div>
    );
}

export default ProductPage;
