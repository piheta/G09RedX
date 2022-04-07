import React from 'react';
import './Login.css';
import '../../styles/global.css'
import {useNavigate} from 'react-router';


function Login() {

    const navigate = useNavigate();

    return (
        <section className={"login-section"}>
            <div className="form-container">
                <div className="form-wrapper">
                    <div>
                        <h1 className="header-label">Login</h1>
                    </div>
                    <div className="form">
                        <form className="form-signin">
                            <label htmlFor="username">Username:</label>
                            <input id="username" type="text" name="username" autoFocus/>
                            <label id="password" htmlFor="password">Password:</label>
                            <input type="password" name="password"/>
                            <input type="button" id="submit-button" value="Login"/>
                        </form>
                    </div>
                    <div className={"login-footer"}>
                        <a className={"register-anchor"} href="/#">Not registered? Sign up</a>
                        <img className={"brand-logo"} src={"/images/cross.png"} alt=""/>
                        <a className={"main-anchor"} onClick={() => navigate("/")}>Back to main page</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;