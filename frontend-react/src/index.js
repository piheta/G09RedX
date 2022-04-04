import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/global.css';
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    rootElement
);


