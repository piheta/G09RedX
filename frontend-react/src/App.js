import './styles/global.css';

import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/Homepage";
import CheckoutPage from "./pages/CheckoutPage";
import Login from "./components/login/Login";
import Register from "./components/register/Register";


function App() {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<HomePage />}/>
                <Route path="/checkout" element={<CheckoutPage />}/>
                <Route path ="/login" element = {<Login />}/>
                <Route path ="/register" element = {<Register />}/>
            </Routes>
        </div>
    );
}

export default App;
