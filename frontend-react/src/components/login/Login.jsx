import React from 'react';
import './Login.css';
import {useNavigate} from 'react-router';


function Login() {

    const navigate = useNavigate();

    return (
        <section className={"login-section"}>
            <div className="form-container">
                <div className="form-wrapper">
                    <h1 className="header-label">Login</h1>
                    <div className="form">
                        <form className="form-signin">
                            <label htmlFor="username">Username:</label>
                            <input id="username" type="text" name="username"/>
                            <label id="password" htmlFor="password">Password:</label>
                            <input type="password" name="password"/>
                            <input type="button" id="submit-button" value="Login"/>
                        </form>
                    </div>

                    <a href="/#">Not registered? Sign up</a>

                    <div className="logo">
                        <img src={"/images/cross.png"} alt=""/>
                    </div>

                    <a onClick={() => navigate("/")}>Back to main page</a>

                </div>
            </div>
        </section>
    );
}

export default Login;