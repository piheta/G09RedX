import React, {useEffect, useState} from 'react';
import './Nav.css';
import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';


function Nav() {

    const [active, setActive] = useState("menubar-links");

    const [icon, setIcon] = useState("nav-toggler");

    const navToggle = () => {

        if (active === "menubar-links") {
            setActive("menubar-links nav-active");
        } else setActive("menubar-links");

        // Icon Toggler
        if (icon === "nav-toggler") {
            setIcon("nav-toggler toggle");
        } else setIcon("nav-toggler");

        if (active === "menubar-links nav-active") {
            enableBodyScroll(document);
        } else {
            disableBodyScroll(document);
        }
    };

    return (
        <section id="header">

            <div className="menubar">
                <nav className="header-container">

                    <div className="brand-image">
                        <img src={"/images/cross.png"} alt=""/>
                    </div>

                    <div onClick={navToggle} className={icon}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>

                    <ul className={active}>
                        <li className="nav-item">
                            <a href="/#" className="nav-link">
                                Login
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/#" className="nav-link">
                                Products
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/#" className="nav-link">
                                Companies
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/#" className="nav-link">
                                Testimonials
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className="container-text">
                    <h1>RED CROSS ÅLESUND</h1>
                    <h6>We value every life</h6>
                    <div className="signup-btn">
                        <button type="button">Sign up for course</button>
                    </div>
                </div>


            </div>
        </section>
    );
}

export default Nav;
