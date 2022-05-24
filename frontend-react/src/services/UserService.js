import axios from "axios";
import {useDispatch} from "react-redux";
import {setUser} from "../store/action/UserAction";

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