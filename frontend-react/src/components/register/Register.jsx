import React, {useState} from 'react';
import '../../styles/LoginForms.css';
import '../../styles/global.css'
import {useNavigate} from 'react-router';
import {TextField} from "@mui/material";
import axios from "axios";

/**
 * Creates the register page component. And holds the
 * API request method to create a new user.
 */
function Register() {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [feedbackText, setFeedbackText] = useState("");
    const [success, setSuccess] = useState(false);

    /**
     * Sends a request to register a new user,
     * if the password and confirmpassword fields match.
     * Sets the feedbackText to the error message in the response
     * if the registering fails on the backend checks.
     *
     * Navigates to login if successful.
     */
    function sendCreateUserRequest() {
        if (password === confirmPassword) {
            let userInfo = {
                "userName": username,
                "password": password,
                "email": email
            }
            axios({
                method: "post",
                url: process.env.REACT_APP_URL + "/user/register",
                header: {
                    "Accept": "*/*",
                    "Access-Control-Allow-Origin": "*",
                    'Access-Control-Allow-Credentials': true,
                    "Access-Control-Allow-headers": "*",
                    "Content-Type": "application/json"
                },
                data: userInfo
            }).then((response) => {
                if (response.status === 201) {
                    setSuccess(true);
                    setFeedbackText(response.data);
                }
            }).catch((error) => {
                setSuccess(false);
                setFeedbackText(error.response.data);
            })
        } else {
            setFeedbackText('Make sure the passwords match.');
        }
    }

    return (
        <section className={"form-section"}>
            <div className="form-wrapper">
                <h1 className="header-forms-label">Sign up</h1>

                <div className={"form-container"}>
                    <TextField onChange={(elem) => setEmail(elem.target.value)} label="Email" type={"text"}
                               margin={"dense"} variant={"filled"} color={"error"}/>
                    <TextField onChange={(elem) => setUsername(elem.target.value)} label="Username" type={"text"}
                               margin={"dense"} variant={"filled"} color={"error"}/>
                    <TextField onChange={(elem) => setPassword(elem.target.value)} label="Password" type={"password"}
                               margin={"dense"} variant={"filled"} color={"error"}/>
                    <TextField onChange={(elem) => setConfirmPassword(elem.target.value)} label="Confirm password"
                               type={"password"} margin={"dense"} variant={"filled"} color={"error"}/>
                    {
                        (feedbackText !== '') ?
                            <a href={success ? '/login' : ''} className={success ? 'sign-up-success' : 'sign-up-warning'}>
                                <p className='feedbackText'>{feedbackText}</p>
                                {success ? <p className={'helping-text'}>Press to login</p> : null}
                            </a> : null
                    }
                    <button className='login-signup-button' onClick={sendCreateUserRequest}>Register</button>
                </div>

                <div className="form-footer">
                    <img className={"brand-logo"} src={"images/cross.png"} alt="Red Cross Logo"/>
                    <a className={"main-anchor"} onClick={() => navigate("/")}>Back to main page</a>
                </div>
            </div>
        </section>
    );
}

export default Register;
