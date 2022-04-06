import React from 'react';

import Related from '../components/relatedCompanies/RelatedCompanies.jsx';
import About from '../components/aboutUs/AboutUs.jsx';
import Testimonials from '../components/testimonials/Testimonials.jsx';
import ProductSection from "../components/productSection/ProductSection";

function HomePage() {
    return (
        <div>
            <ProductSection />
            <About />
            <Related />
            <Testimonials />
        </div>
    );
}

export default HomePage;
