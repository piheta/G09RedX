import React from 'react';
import './Register.css';
import {useNavigate} from 'react-router';


function Register(){
    const navigate = useNavigate();
    return (
        <section className={"register-section"}>
            <div className="form-wrapper">
                <h1 className="header-label">Register</h1>
                <div className="form">
                    <form className="form-signin">
                        <label htmlFor="username">Username:</label>
                        <input type="text"/>
                        <label htmlFor="password">Password:</label>
                        <input type="password"/>
                        <label htmlFor="password1">Retype password:</label>
                        <input type="password" name="password1"/>
                        <input type="button" id="submit-button" value="Sign up"/>
                    </form>
                </div>
                <div className="logo">
                    <img src="../images/cross.png" alt=""/>
                </div>
                <a onClick={() => navigate("/")}>Back to main page</a>
            </div>
        </section>
    );
}

export default Register;
