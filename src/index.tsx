import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {store, StateType} from "./redux/state";

export let rerenderEntierTree = (state: StateType) => {
    ReactDOM.render(
        <App state={state}
             addPost={store.addPost.bind(store)}
             addMessage={store.addMessage.bind(store)}
             updateNewPostText={store.updateNewPostText.bind(store)}
             updateNewMessageText={store.updateNewMessageText.bind(store)}/>,
        document.getElementById('root'));
}
rerenderEntierTree(store.getState());
store.subscribe(rerenderEntierTree)

