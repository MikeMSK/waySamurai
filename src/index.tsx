import React from 'react';
import './index.css';
import {App} from './App';
import {store} from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {createRoot} from "react-dom/client";


const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>,
    </BrowserRouter>)