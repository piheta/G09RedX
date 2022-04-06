import React from 'react';
import './Testimonials.css';
import '../../styles/global.css';
import user1 from '../../images/user1.png';
import user2 from '../../images/user2.png';
import user3 from '../../images/user3.png';


function Testimonials() {
    return (
        <section id="testimonial-section">
            <div className="testimonial-header">
                <h1>Testimonials</h1>
                <h2>Reviews from our happiest customers </h2>
            </div>


            <div className="testimonial-wrapper">
                <div className="testimonial">
                    <img src={user1} alt=""/>
                    <h2>EXCELLENT EXPERIENCE</h2>
                    <p>
                        "Red Cross are very competent experts in first help.
                            They are so effective; you never need the second help."
                    </p>
                </div>

                <div className="testimonial">
                    <img src={user2} alt=""/>
                    <h2>GREAT SERVICE</h2>
                    <p>
                        "I have been HR responsible at my company for 12 years, and every year I update my certification with Red Cross Ålesund.
                        I can proudly say that no one has died under my watch."
                    </p>
                </div>
                <div className="testimonial">
                    <img src={user3} alt=""/>
                        <h2>EXCELLENT EXPERIENCE</h2>
                            <p>
                                "These folks may not be Linux kernel gurus, but they do one thing well –
                                they teach you the essentials of first help in an easy and interesting way."
                            </p>
                </div>
            </div>

            <div className="line"></div>
        </section>
);
}

export default Testimonials;
