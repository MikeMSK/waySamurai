import React from "react";
import {getAuthUserDataTC} from "./auth-reducer";

const initialState = {
    initialized: false
}

export const appReducer = (state: AppInitialStateType = initialState,
                           action: AppAcType): AppInitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {...state, initialized: true}
        default:
            return state
    }
}

// ---- ActionCreator -----
export const setInitializedSuccessAC = () => {
    return {type: INITIALIZED_SUCCESS} as const
}

//---- thunks -----
export const initializeAppTC = () => {
    return (dispatch: any) => {
        let promise = dispatch(getAuthUserDataTC())
        Promise.all([promise])
            .then(() => {
                dispatch(setInitializedSuccessAC())
            })

    }
}

//types
export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type AppInitialStateType = typeof initialState
export type AppAcType =
    | ReturnType<typeof setInitializedSuccessAC>

//const
const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';