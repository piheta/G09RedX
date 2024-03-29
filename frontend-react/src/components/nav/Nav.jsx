import React, {useState} from 'react';
import './Nav.css';
import {enableBodyScroll} from 'body-scroll-lock';
import {useLocation, useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../services/UserService";
import { MdLogout } from 'react-icons/md';

/**
 * Component for our navbar  which we reuse
 * on every page.
 */
function Nav({productId}) {

    const navigate = useNavigate();

    const location = useLocation();

    const [active, setActive] = useState("menubar-links");

    const [icon, setIcon] = useState("nav-toggler");

    const isLogged = useSelector(state => state.isLogged.isLogged);

    const dispatch = useDispatch();

    //Toggles Animation for menu and icon based on classname.
    const navToggle = () => {
        //Menu
        if (active === "menubar-links") {
            setActive("menubar-links nav-active");
        } else setActive("menubar-links");


        // Icon Toggler
        if (icon === "nav-toggler") {
            setIcon("nav-toggler toggle");
        } else setIcon("nav-toggler");
    };

    return (
        <section id="header">
            <div className={location.pathname === '/checkout/' + productId ? 'menubar-tiny' : 'menubar'}>
                <nav className="header-container">

                    <a href={'/'}><img className={"brand-image"} src={"/images/cross.png"} alt="Red Cross Logo"/></a>
                    <p id='mobile-logo'>Red Cross</p>
                    <div onClick={navToggle} className={icon}>
                        <div className="line1"/>
                        <div className="line2"/>
                        <div className="line3"/>
                    </div>

                    <ul className={active}>
                        {/*
                            Changes the navlinks based on where you are on
                            our site.
                        */}
                        {
                            location.pathname === '/checkout/' + productId ?
                                <>
                                    <li className={"nav-item"}>
                                        <a onClick={navToggle} href='#related-products-header' className={'nav-link'}>
                                            Related products
                                        </a>
                                    </li>
                                    <li className={"nav-item"}>
                                        <a onClick={navToggle} href='#review-section' className={'nav-link'}>
                                            Reviews
                                        </a>
                                    </li>
                                </>
                                :
                                <>
                                    <li className="nav-item">
                                        <a onClick={navToggle} href='#product-card-section' className="nav-link">
                                            Products
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a onClick={navToggle} href="#related-companies" className="nav-link">
                                            Companies
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a onClick={navToggle} href="#testimonial-section" className="nav-link">
                                            Testimonials
                                        </a>
                                    </li>
                                </>
                        }
                        <li className="nav-item">
                            <a href={!isLogged ? '/login' : ''} onClick={() => (isLogged ? logout(dispatch, navigate) : null, enableBodyScroll(document))} className="nav-link">
                                {
                                    isLogged ? <MdLogout className={"logout-icon"} color="white"/> : 'Login'
                                }
                            </a>
                        </li>
                    </ul>
                </nav>
                {
                    location.pathname === '/checkout/'+ productId ?
                        null
                        :
                        <div className="container-text">
                            <h1>RED CROSS ÅLESUND</h1>
                            <h2>We value every life</h2>
                            <div className="signup-btn">
                                <button onClick={() => navigate("/checkout/1")} type="button">Sign up for course</button>
                            </div>
                        </div>
                }
            </div>
        </section>
    );
}

export default Nav;
