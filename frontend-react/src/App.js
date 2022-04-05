import './styles/global.css';

import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav.jsx";



function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Nav/>}/>
            </Routes>
        </div>
    );
}

export default App;
