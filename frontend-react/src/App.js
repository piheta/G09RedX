import './styles/global.css';

import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/Homepage";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import {useEffect} from "react";
import {getCookie} from "./services/CookieService";
import {GetUserInfo} from "./services/UserService";
import {useDispatch} from "react-redux";
import {setLoginStatus} from "./store/action/IsLoggedAction";
import ProductPage from "./pages/ProductPage";


function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        const jwt = getCookie('jwt');
        if (jwt && jwt.length > 0) {
            dispatch(setLoginStatus({isLogged: true}));
            GetUserInfo(jwt, dispatch);
        }
    }, []);



    return (
        <div>
            <Routes>
                <Route exact path="/" element={<HomePage />}/>
                <Route path="/checkout/:productId" element={<ProductPage />}/>
                <Route path ="/login" element = {<Login />}/>
                <Route path ="/register" element = {<Register />}/>
            </Routes>
        </div>
    );
}

export default App;
