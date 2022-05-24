import React from 'react';
import Nav from "../components/nav/Nav";
import CheckoutSection from "../components/checkoutSection/CheckoutSection";
import ReviewSection from "../components/reviewSection/ReviewSection";
import Footer from "../components/footer/Footer";
import {useParams} from "react-router";

function CheckoutPage() {

    let {productId} = useParams();


    return (
        <div>
            <Nav />
            <CheckoutSection productId={productId}/>
            <ReviewSection productId={productId}/>
            <Footer />
        </div>
    );
}

export default CheckoutPage;
