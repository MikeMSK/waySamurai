import React from 'react';
import {ActionType, MessagesPageType} from "./store";

const initialState: MessagesPageType = {
    dialogs: [
        {id: "1", name: "Misha"},
        {id: "2", name: "Igor"},
        {id: "3", name: "Piter"},
        {id: "4", name: "Anton"},
        {id: "5", name: "Kolya"},
    ],
    messages: [
        {id: "1", message: "Hi!"},
        {id: "2", message: "Good morning!"},
        {id: "3", message: "How do you do?"},
        {id: "4", message: "I am fine, thank you and you?"},
        {id: "5", message: "I`m ok"},
    ],
    newMessageText: ""
}
//: MessagesPageType
export const dialogsReducer = (state = initialState, action: ActionType) => {

    let stateCopy = {...state, message: [...state.messages]}

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMassage = {id: "10", message: state.newMessageText}
            stateCopy.messages.push(newMassage);
            stateCopy.newMessageText = ' '
            return stateCopy
        }
        case UPDATE_NEW_MESSAGE_TEXT:
            stateCopy.newMessageText = action.newText
            return stateCopy
        default:
            return state
    }
};

export const addMessageActionCreator = () => {
    return {type: ADD_MESSAGE} as const
}
export const updateMessageActionCreator = (text: string) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, newText: text} as const
}

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';