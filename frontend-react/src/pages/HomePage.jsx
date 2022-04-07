import React from 'react';

import Related from '../components/relatedCompanies/RelatedCompanies.jsx';
import About from '../components/aboutUs/AboutUs.jsx';
import Testimonials from '../components/testimonials/Testimonials.jsx';
import ProductSection from "../components/productSection/ProductSection";
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";

function HomePage() {
    return (
        <div>
            <Nav/>
            <ProductSection />
            <About />
            <Related />
            <Testimonials />
            <Footer/>
        </div>
    );
}

export default HomePage;
