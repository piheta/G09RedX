import React from 'react';
import './Homepage.css';
import '../styles/global.css';

import Related from '../components/relatedCompanies/RelatedCompanies.jsx';
import About from '../components/aboutUs/AboutUs.jsx';
import Testimonials from '../components/testimonials/Testimonials.jsx';
import ProductSection from "../components/productSection/ProductSection";
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";


/*
 * Returns the homepage in components
 */

function HomePage() {
    return (
        <div>
            <Nav/>
            <div id='center-wrapper'>
                <ProductSection/>
                <About/>
                <Related/>
                <Testimonials/>
            </div>
            <Footer/>
        </div>
    );
}

export default HomePage;
