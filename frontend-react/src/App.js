import './styles/global.css';

import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CheckoutPage from "./pages/CheckoutPage";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";


function App() {
    return (
        <div>
            <Nav />
            <Routes>
                <Route exact path="/" element={<HomePage />}/>
                <Route path="/checkout" element={<CheckoutPage />}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
