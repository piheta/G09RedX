import React from 'react';
import '../aboutUs/AboutUs.css';
import '../../styles/global.css';

/**
 * Source for the slider.
 * https://codepen.io/dudleystorey/pen/kBrWvm
 * 
 * Filler text taken from:
 * https://en.wikipedia.org/wiki/International_Red_Cross_and_Red_Crescent_Movement
 */
function AboutUs() {
    return (
        <section id="about-us">
            <div className="about-text">
                <h1>About us</h1>
                <p>We provide courses both during work time and evening courses. <br/> Since 2020, we don't provide
                    weekend
                    courses anymore.</p>
                <img src='/images/home3.jpg' alt='redcross team' />
                <p>
                    Our team consists of medical professionals with more than 30 years of experience. <br/>We are
                    certified
                    according to ISO 8072 and DNV 23:786.<br/><br/>
                    
                    Alesund Red Cross (ARC), also known as The American National Red Cross, is a non-profit humanitarian organization that provides emergency assistance, disaster relief, and disaster preparedness education in the Norway.<br/><br/> 
                    It is the designated US affiliate of the International Federation of Red Cross and Red Crescent Societies and the United States movement to the International Red Cross and Red Crescent Movement.
                    
                </p>
            </div>
            <div id="slider-box"> /
                <div id="slider">
                    <figure>
                        <img src='/images/home1.jpg' alt='redcross flag' />
                        <img src='/images/home2.jpg' alt='supply delivery' />
                        <img src='/images/home3.jpg' alt='redcross team' />
                        <img src='/images/home4.jpg' alt='redcross truck' />
                        <img src='/images/home1.jpg' alt='redcross flag' />
                    </figure>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
