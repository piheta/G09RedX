import React from 'react';
import '../../styles/LoginForms.css';
import '../../styles/global.css'
import {useNavigate} from 'react-router';
import {Button, TextField} from "@mui/material";


function Register() {

    const navigate = useNavigate();

    return (
        <section className={"form-section"}>

            <div className="form-wrapper">
                <h1 className="header-forms-label">Sign up</h1>

                <div className={"form-container"}>
                    <TextField label="Email" type={"text"} margin={"dense"} variant={"filled"} color={"error"}/>
                    <TextField label="Username" type={"text"} margin={"dense"} variant={"filled"} color={"error"}/>
                    <TextField label="Password" type={"text"} margin={"dense"} variant={"filled"} color={"error"}/>
                    <TextField label="Confirm password" type={"text"} margin={"dense"} variant={"filled"} color={"error"}/>
                    <Button variant="outlined" color={"error"}>Confirm</Button>
                </div>

                <div className="form-footer">
                    <img className={"brand-logo"} src="../images/cross.png" alt=""/>
                    <a className={"main-anchor"} onClick={() => navigate("/")}>Back to main page</a>
                </div>
            </div>

        </section>
    );
}

export default Register;
