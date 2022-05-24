import React from 'react';
import Nav from "../components/nav/Nav";
import CheckoutSection from "../components/checkoutSection/CheckoutSection";
import ReviewSection from "../components/reviewSection/ReviewSection";
import Footer from "../components/footer/Footer";

function CheckoutPage() {
    return (
        <div>
            <Nav />
            <CheckoutSection />
            <ReviewSection />
            <Footer />
        </div>
    );
}

export default CheckoutPage;
