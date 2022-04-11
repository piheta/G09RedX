import React from 'react';
import './Footer.css';
import '../../styles/global.css';

function Footer() {
    return (

        <section id="footer">
            <div className="footer-container">
                <div className="dropbar-container">
                    <nav>
                        <label htmlFor="touch"><span>Shortcut</span></label>
                        <input type="checkbox" id="touch"/>

                        <ul className="slide">
                            <li><a href="/#">Certification</a></li>
                            <li><a href="/#">Payments</a></li>
                            <li><a href="/#">Orders</a></li>
                        </ul>

                    </nav>
                    <nav>
                        <label htmlFor="touch1"><span>Information</span></label>
                        <input type="checkbox" id="touch1"/>

                        <ul className="slide">
                            <li><a href="/#">Terms and conditions</a></li>
                            <li><a href="/#">Code and Medical Ethics</a></li>
                            <li><a href="/#">Terms of sale</a></li>
                        </ul>

                    </nav>
                    <nav>
                        <label htmlFor="touch2"><span>Support</span></label>
                        <input type="checkbox" id="touch2"/>

                        <ul className="slide">
                            <li><a href="/#">Contacts us</a></li>
                            <li><a href="/#">Questions and Answers</a></li>
                            <li><a href="/#">Refunds</a></li>
                        </ul>
                    </nav>
                </div>

                <div className="shortcut">
                    <h1>Shortcut</h1>
                    <ul>
                        <li><a href="/#">Certification</a></li>
                        <li><a href="/#">Payments</a></li>
                        <li><a href="/#">Orders</a></li>
                    </ul>
                </div>


                <div className="information">
                    <h1>Information</h1>
                    <ul>
                        <li><a href="/#">Terms and conditions</a></li>
                        <li><a href="/#">Code and Medical Ethics</a></li>
                        <li><a href="/#">Terms of sale</a></li>
                    </ul>
                </div>


                <div className="support">
                    <h1>Support</h1>
                    <ul>
                        <li><a href="/#">Contacts us</a></li>
                        <li><a href="/#">Questions and Answers</a></li>
                        <li><a href="/#">Refunds</a></li>
                    </ul>
                </div>

                <div className="footer-images">
                    <img src={"/images/cross.png"} alt=""/>
                    <p>Copyright © 2022 NTNU, IDATA2301 Web Technologies - group 9</p>
                </div>
            </div>
        </section>
    );
}

export default Footer;
