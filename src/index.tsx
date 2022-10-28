import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {store, StateType} from "./redux/state";
import {Provider} from "./StoreContext";

export let rerenderEntierTree = (state: StateType) => {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById('root'));
}

rerenderEntierTree(store.getState());
store.subscribe(rerenderEntierTree)

