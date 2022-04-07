import './styles/global.css';

import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CheckoutPage from "./pages/CheckoutPage";
import Login from "./components/login/Login";


function App() {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<HomePage />}/>
                <Route path="/checkout" element={<CheckoutPage />}/>
                <Route path ="/login" element = {<Login />}/>
            </Routes>
        </div>
    );
}

export default App;
