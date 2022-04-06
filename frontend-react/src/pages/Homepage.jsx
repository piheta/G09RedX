import React from 'react';

import Nav from '../components/nav/Nav.jsx';
import Related from '../components/relatedCompanies/RelatedCompanies.jsx';
import About from '../components/aboutUs/AboutUs.jsx';
import Testimonials from '../components/testimonials/Testimonials.jsx';
import Footer from '../components/footer/Footer.jsx';
import ProductSection from "../components/productCard/ProductSection";

function Homepage() {
    return (
        <>
            <Nav />
            <ProductSection />
            <About />
            <Related />
            <Testimonials />
            <Footer />
        </>
    );
}

export default Homepage;
