import './styles/global.css';

import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/Homepage";
import OneDayCourse from "./pages/OneDayCourse";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import TwoDayCourse from "./pages/TwoDayCourse";
import ShortConsultation from "./pages/ShortConsultation";
import Review from "./components/review/Review";


function App() {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<HomePage />}/>
                <Route path="/checkout/oneDayCourse" element={<OneDayCourse />}/>
                <Route path="/checkout/twoDayCourse" element={<TwoDayCourse />}/>
                <Route path="/checkout/shortconsultation" element={<ShortConsultation />}/>
                <Route path ="/login" element = {<Login />}/>
                <Route path ="/register" element = {<Register />}/>
                <Route path ="/review" element = {<Review />}/>
            </Routes>
        </div>
    );
}

export default App;
