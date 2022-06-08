import React, {useState} from 'react';
import '../../styles/LoginForms.css';
import '../../styles/global.css'
import {useNavigate} from 'react-router';
import {Button, TextField} from "@mui/material";
import axios from "axios";


function Register() {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [warningText, setWarningText] = useState("");

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
                    navigate('/login');
                }
            }).catch((error) => {
                setWarningText(error.response.data);
            })
        } else {
            setWarningText('Make sure the passwords match.');
        }
    }

    return (
        <section className={"form-section"}>

            <div className="form-wrapper">
                <h1 className="header-forms-label">Sign up</h1>

                <div className={"form-container"}>
                    <TextField onChange={(elem) => setEmail(elem.target.value)} label="Email" type={"text"} margin={"dense"} variant={"filled"} color={"error"}/>
                    <TextField onChange={(elem) => setUsername(elem.target.value)} label="Username" type={"text"} margin={"dense"} variant={"filled"} color={"error"}/>
                    <TextField onChange={(elem) => setPassword(elem.target.value)}  label="Password" type={"password"} margin={"dense"} variant={"filled"} color={"error"}/>
                    <TextField onChange={(elem) => setConfirmPassword(elem.target.value)}  label="Confirm password" type={"password"} margin={"dense"} variant={"filled"} color={"error"}/>
                    {
                        (warningText !== '') ? <div className={'sign-up-warning'}><p className='warningText'>{warningText}</p></div> : null
                    }
                    <button className='login-signup-button' onClick={sendCreateUserRequest}>Register</button>
                </div>

                <div className="form-footer">
                    <img className={"brand-logo"} src={"/images/cross.png"} alt="logo"/>
                    <a className={"main-anchor"} onClick={() => navigate("/")}>Back to main page</a>
                </div>
            </div>

        </section>
    );
}

export default Register;
