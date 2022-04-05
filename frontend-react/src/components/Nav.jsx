import React, {useState} from 'react';
import './Nav.css'
import '../styles/global.css'
import headerlogo from '../images/cross.png';


function navbar() {


    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [active, setActive] = useState("nav-menu");

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [icon, setIcon] = useState("nav-toggler");

    const navToggle = () => {
        if (active === "nav-menu") {
            setActive("nav-menu nav-active");
        } else setActive("nav-menu");

        // Icon Toggler
        if (icon === "nav-toggler") {
            setIcon("nav-toggler toggle");
        } else setIcon("nav-toggler");
    };

        return (
            <div>
                <nav className="nav">

                    <img src={headerlogo} alt={"Header-Logo"}/>

                    <ul className={active}>
                        <li className="nav-item">
                            <a href="/#" className="nav-link">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/#" className="nav-link">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/#" className="nav-link">
                                Portfolio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/#" className="nav-link">
                                Skills
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/#" className="nav-link">
                                Contact
                            </a>
                        </li>
                    </ul>

                    <div onClick={navToggle} className={icon}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                </nav>
            </div>
        );
    }
export default navbar;
