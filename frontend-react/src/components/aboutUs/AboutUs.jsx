import React from 'react';
import '../aboutUs/AboutUs.css';
import '../../styles/global.css';


function AboutUs() {
    return (
        <section id="about-us">
            <div className="about-text">
                <h1>About us</h1>
                <p>We provide courses both during work time and evening courses. <br/> Since 2020, we don't provide
                    weekend
                    courses anymore.</p>
            </div>
            <div className="text-under">
                <p>Our team consists of medical professionals with more than 30 years of experience. <br/>We are
                    certified
                    according to ISO 8072 and DNV 23:786.</p>
            </div>
        </section>
    );
}

export default AboutUs;
