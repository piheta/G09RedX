import React, {useState} from 'react';
import '../../styles/LoginForms.css';
import '../../styles/global.css'
import {useNavigate} from 'react-router';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setLoginStatus} from "../../store/action/IsLoggedAction";
import {Button, TextField} from "@mui/material";

function Login() {

    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const dispatch = useDispatch();
    const isLogged = useSelector(state => state.isLogged);
    const [warning, setWarning] = React.useState(false);
    const [warningText, setWarningText] = React.useState("");

    function sendLoginRequest() {
        let loginInfo = {
            "userName": username,
            "password": password
        }
        axios({
            method: "post",
            url: "https://gr09.appdev.cloudns.ph:8443/authenticate",
            headers: {
                "Accept": "*/*",
                "Content-Type": "application/json"
            },
            data: loginInfo
        }).then((response) => {
            if (response.status === 200) {
                setWarning(false);
                dispatch(setLoginStatus({
                    isLogged: true,
                    jwToken: response.data.jwt
                }));
                navigate("/");
            }
        }).catch((error) => {
            setWarning(true);
            setWarningText(error.response.data);
        })
    };

    return (
        <section className={"form-section"}>

            <div className="form-wrapper">
                <h1 className="header-forms-label">Sign In</h1>

                <div className="form-container">
                    <TextField onChange={(elem) => setUsername(elem.target.value)}
                               label="Username" type={"text"} margin={"dense"} variant={"filled"} color={"error"}/>

                    <TextField onChange={(elem) => setPassword(elem.target.value)} label="Password" type={"text"} margin={"dense"} variant={"filled"} color={"error"}/>

                    {
                        (warning === true)
                            ?
                            <div className={"sign-up-warning"}>
                                <p>{warningText}</p>
                            </div>
                            :
                            <div></div>
                    }

                    <Button onClick={sendLoginRequest} variant="outlined" color={"error"}>Confirm</Button>
                </div>

                <div className={"form-footer"}>
                    <a className={"register-anchor"} onClick={() => navigate("/register")}>Not registered? Sign up</a>
                    <img className={"brand-logo"} src={"/images/cross.png"} alt=""/>
                    <a className={"main-anchor"} onClick={() => navigate("/")}>Back to main page</a>
                </div>
            </div>

        </section>
    );
}

export default Login;
