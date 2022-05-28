import axios from "axios";
import {removeUser, setUser} from "../store/action/UserAction";
import {setLoginStatus} from "../store/action/IsLoggedAction";
import {deleteCookie, setCookie} from "./CookieService";

export function GetUserInfo(token, dispatch) {
    axios({
        method: "get",
        url: process.env.REACT_APP_URL + "/user/myuser",
        headers: {
            'Accept': '*/*',
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        }
    })
        .then(function (response) {
            if (response.status === 200) {
                dispatch(setUser({
                    user: response.data
                }))
            }
        });
}

export function logout(dispatch, navigate) {
    deleteCookie('jwt');
    dispatch(setLoginStatus({
        isLogged: false
    }));
    dispatch(removeUser());
    navigate('/login')
}

export function isLoggedIn(isLogged) {
    return isLogged.isLogged;
}