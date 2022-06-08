import React from 'react';
import './Testimonials.css';

/**
 * A component for the Testimonial section of the homepage.
 */
function Testimonials() {
    return (
        <section id="testimonial-section">
            <div className="testimonial-header">
                <h1>Testimonials</h1>
                <h2>Reviews from our happiest customers</h2>
            </div>
            <div className="testimonial-wrapper">
                <div className="testimonial">
                    <img src={ "/images/user1.png" } alt="profie picutre of mateusz picheta"/>
                    <h3>Truly Amazing</h3>
                    <p>
                        "Red Cross are very competent experts in first help.
                        They are so effective; you never need the second help."
                    </p>
                    <p className="signature">- Mateusz Picheta</p>
                </div>

                <div className="testimonial">
                    <img src={ "/images/user2.png" } alt="profile picture of haakon saetre"/>
                    <h3>Great Service</h3>
                    <p>
                        "I have been HR responsible at my company for 12 years, and every year I update my certification with Red Cross Ålesund."
                    </p>
                    <p className="signature">- Håkon Sætre</p>
                </div>
                <div className="testimonial">
                    <img src={ "/images/user3.png" } alt="profile picture of petter molnes"/>
                    <h3>Superb Experience</h3>
                    <p>
                        "These folks may not be Linux kernel gurus, but they do one thing well -
                        they teach you the essentials of first help in an easy and interesting way."
                    </p>
                    <p className="signature">- Petter Molnes</p>
                </div>
            </div>
        </section>
);
}

export default Testimonials;
