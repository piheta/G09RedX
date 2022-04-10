import React, {useState} from 'react';
import './Login.css';
import '../../styles/global.css'
import {useNavigate} from 'react-router';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setLoginStatus} from "../../store/action/IsLoggedAction";

function Login() {

    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const dispatch = useDispatch();
    const isLogged = useSelector(state => state.isLogged);

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
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Credentials': true,
                "Access-Control-Allow-headers": "*",
                "Content-Type": "application/json"
            },
            data: loginInfo
        }).then((response) => {
            console.log(response.data);
            if (response.status === 200) {
                dispatch(setLoginStatus({
                    isLogged: true,
                    jwToken: response.data.jwt
                }));
                navigate("/");
            }
        }).catch((response) => console.log(response.status));
    };

    return (
        <section className={"login-section"}>
            <div className="form-login-container">
                <div className="form-login-wrapper">
                    <div>
                        <h1 className="header-login-label">Login</h1>
                    </div>
                    <div>
                        <div className="login-form">
                            <label htmlFor="username">Username:</label>
                            <input onChange={(elem) => setUsername(elem.target.value)} id="username" type="text" name="username" autoFocus/>
                            <label id="password" htmlFor="password">Password:</label>
                            <input onChange={(elem) => setPassword(elem.target.value)} type="password" name="password"/>
                            <input onClick={sendLoginRequest} type="button" id="submit-button" value="Login"/>
                        </div>
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
