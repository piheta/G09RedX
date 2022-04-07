import React from 'react';
import './Login.css';
import '../../styles/global.css'
import {useNavigate} from 'react-router';


function Login() {

    const navigate = useNavigate();

    return (
        <section className={"login-section"}>
            <div className="form-login-container">
                <div className="form-login-wrapper">
                    <div>
                        <h1 className="header-login-label">Login</h1>
                    </div>
                    <div>
                        <form className="login-form">
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
