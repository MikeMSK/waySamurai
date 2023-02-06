import {profileAPI} from "../api/api";


const initialState = {
    profile: null,
    posts: [
        {id: "1", message: "Hi, how are you?", likesCount: 5},
        {id: "2", message: "I`am fine, thanks you", likesCount: 10},
        {id: "3", message: "Very good!", likesCount: 15},
    ] as Array<PostType>,
    status: ''
}

export const profileReducer = (state: ProfileInitialStateType = initialState,
                               action: ProfileAcType): ProfileInitialStateType => {
    switch (action.type) {
        case ADD_POST:
            return {...state, posts: [...state.posts, {id: "10", message: action.newPostText, likesCount: 0}]}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return state
    }
}

// ---- ActionCreator -----
export const addPostAC = (newPostText: string) => {
    return {type: ADD_POST, newPostText} as const
}
export const setUserProfileAC = (profile: any) => {
    return {type: SET_USER_PROFILE, profile} as const
}
export const setStatusAC = (status: string) => {
    return {type: SET_STATUS, status} as const
}

//---- thunks -----
export const getUsersProfileTC = (userID: number) => {
    return (dispatch: any) => {
        profileAPI.getProfile(userID)
            .then(data => {
                dispatch(setUserProfileAC(data))
            })
    }
}
export const getStatusTC = (userID: number) => {
    return (dispatch: any) => {
        profileAPI.getStatus(userID)
            .then(responce => {
                dispatch(setStatusAC(responce.data))
            })
    }
}
export const updateStatusTC = (status: string) => {
    return (dispatch: any) => {
        profileAPI.updateStatus(status)
            .then(responce => {
                if (responce.data.resultCode === 0) {
                    dispatch(setStatusAC(status))
                }
            })
    }
}

//types
export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type ProfileInitialStateType = typeof initialState
export type ProfileAcType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof setStatusAC>

//const
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';