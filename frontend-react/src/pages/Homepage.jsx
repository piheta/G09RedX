import React from 'react';

import Nav from '../components/nav/Nav.jsx';
import Related from '../components/relatedCompanies/RelatedCompanies.jsx';
import About from '../components/aboutUs/AboutUs.jsx';
import Testimonials from '../components/testimonials/Testimonials.jsx';
import Footer from '../components/footer/Footer.jsx';
import ProductCard from "../components/productCard/ProductCard";

function Homepage() {
    return (
        <>
            <Nav />
            <ProductCard image='/#' imageAlt='Test' title='One day course' description='Test'/>
            <About />
            <Related />
            <Testimonials />
            <Footer />
        </>
    );
}

export default Homepage;
