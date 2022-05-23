import React, {useState} from 'react';
import '../../styles/global.css'
import './NavProduct.css'
import {useNavigate} from "react-router";
import {disableBodyScroll, enableBodyScroll} from "body-scroll-lock";

function NavProduct() {

    const navigate = useNavigate();

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

            <div className="menubar">
                <nav className="header-container">

                    <a className={"brand-image-anchor"} onClick={() => navigate("/")}>
                        <img className={"brand-image"} src={"/images/cross.png"} alt=""/>
                    </a>

                    <div onClick={navToggle} className={icon}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>

                    <ul className={active} >
                        <li className="nav-item">
                            <a onClick={() => navigate("/login")} className="nav-link">
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


            </div>
        </section>
    );
}

export default NavProduct;
