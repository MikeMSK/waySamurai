import React from 'react';
import {ActionType, SidebarType, StateType} from "./store";

let initialState: Array<SidebarType> = [
    {id: "1", name: "Misha"},
    {id: "3", name: "Piter"},
    {id: "4", name: "Olya"}
]

export const sidebarReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case ADD_ALERT:
            return state
        default:
            return state
    }
};

export const addAlertActionCreator = () => {
    return {type: ADD_ALERT} as const
}

const ADD_ALERT = "ADD-ALERT"