import './styles/global.css';

import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/Homepage";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import ProductPage from "./pages/ProductPage";


function App() {
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
