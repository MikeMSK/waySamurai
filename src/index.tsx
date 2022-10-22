import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {store, StateType} from "./redux/state";

export let rerenderEntierTree = (state: StateType) => {
    ReactDOM.render(
        <App store={store}
             state={state}
             dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root'));
}

rerenderEntierTree(store.getState());
store.subscribe(rerenderEntierTree)

