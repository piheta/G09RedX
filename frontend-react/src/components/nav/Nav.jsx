import React, {useState} from 'react';
import './Nav.css';
import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';
import {useLocation, useNavigate} from "react-router";

function Nav() {

    const navigate = useNavigate();

    const location = useLocation();

    const [active, setActive] = useState("menubar-links");

    const [icon, setIcon] = useState("nav-toggler");

    const navToggle = () => {
        //Menu
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
            <div className={location.pathname === '/checkout' ? 'menubar-tiny' : 'menubar'}>
                <nav className="header-container">

                    <a href={'/'}><img className={"brand-image"} src={"/images/cross.png"} alt=""/></a>

                    <div onClick={navToggle} className={icon}>
                        <div className="line1"/>
                        <div className="line2"/>
                        <div className="line3"/>
                    </div>

                    <ul className={active}>
                        <li className="nav-item">
                            <a onClick={() => (navigate("/login"), enableBodyScroll(document))} className="nav-link">
                                Login
                            </a>
                        </li>
                        {
                            location.pathname === '/checkout' ?
                                null
                                :
                                <div>
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
                                </div>
                        }
                    </ul>
                </nav>
                {
                    location.pathname === '/checkout' ?
                        null
                        :
                        <div className="container-text">
                            <h1>RED CROSS ÅLESUND</h1>
                            <h6>We value every life</h6>
                            <div className="signup-btn">
                                <button type="button">Sign up for course</button>
                            </div>
                        </div>
                }
            </div>
        </section>
    );
}

export default Nav;
