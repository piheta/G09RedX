import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/global.css';
import {BrowserRouter} from "react-router-dom";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux"
import reducer from "./store/reducer"
import thunk from "redux-thunk";

const rootElement = document.getElementById("root");
const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    rootElement
);


