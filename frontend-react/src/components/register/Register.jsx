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

    function sendCreateUserRequest() {
        if (password === confirmPassword) {
            let userInfo = {
                "userName": username,
                "password": password,
                "email": email
            }
            axios({
               method: "post",
               url: "https://gr09.appdev.cloudns.ph:8443/user/register",
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

                }
            }).catch((error) => {
                console.log(error.response.status);
            })
        }
    }

    return (
        <section className={"form-section"}>

            <div className="form-wrapper">
                <h1 className="header-forms-label">Sign up</h1>

                <div className={"form-container"}>
                    <TextField onChange={(elem) => setEmail(elem.target.value)} label="Email" type={"text"} margin={"dense"} variant={"filled"} color={"error"}/>
                    <TextField onChange={(elem) => setUsername(elem.target.value)} label="Username" type={"text"} margin={"dense"} variant={"filled"} color={"error"}/>
                    <TextField onChange={(elem) => setPassword(elem.target.value)}  label="Password" type={"text"} margin={"dense"} variant={"filled"} color={"error"}/>
                    <TextField onChange={(elem) => setConfirmPassword(elem.target.value)}  label="Confirm password" type={"text"} margin={"dense"} variant={"filled"} color={"error"}/>
                    <Button onClick={sendCreateUserRequest} variant="outlined" color={"error"}>Confirm</Button>
                </div>

                <div className="form-footer">
                    <img className={"brand-logo"} src={"images/cross.png"} alt=""/>
                    <a className={"main-anchor"} onClick={() => navigate("/")}>Back to main page</a>
                </div>
            </div>

        </section>
    );
}

export default Register;
