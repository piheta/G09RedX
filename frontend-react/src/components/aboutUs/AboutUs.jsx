import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import '../aboutUs/AboutUs.css';
import '../../styles/global.css';


function AboutUs() {


    const images = [
        { url: "/images/squoosed-medic1.jpg" },
        { url: "/images/squoosed-medic2.jpg" },
        { url: "/images/squoosed-medic3.jpg" },
    ];


    return (
        <section id="about-us">
            <div className="about-text">
                <h1>About us</h1>
                <p>We provide courses both during work time and evening courses. <br/> Since 2020, we don't provide
                    weekend
                    courses anymore.</p>
                <img src={"/images/squoosed-medic2.jpg"}/>
                <p>
                    Our team consists of medical professionals with more than 30 years of experience. <br/>We are
                    certified
                    according to ISO 8072 and DNV 23:786.<br/><br/>
                    
                    Alesund Red Cross (ARC), also known as The American National Red Cross, is a non-profit humanitarian organization that provides emergency assistance, disaster relief, and disaster preparedness education in the Norway.<br/><br/> 
                    It is the designated US affiliate of the International Federation of Red Cross and Red Crescent Societies and the United States movement to the International Red Cross and Red Crescent Movement.
                    
                </p>
            </div>
            <div className={"simple-image-slider"}>
                <SimpleImageSlider
                    width={896}
                    height={504}
                    images={images}
                    showBullets={true}
                    showNavs={true}
                    autoPlay={true}
                    autoPlayDelay={3.0}
                />
            </div>
        </section>
    );
}

export default AboutUs;
