import {usersAPI} from "../api/api";
import {setTotalUsersCount, setUsers, toggleIsFetching} from "./users_reducer";

export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type ProfileInitialStateType = typeof initialState
export type ProfileAcType = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updatePostActionCreator>
    | ReturnType<typeof setUserProfile>

const initialState = {
    profile: null,
    posts: [
        {id: "1", message: "Hi, how are you?", likesCount: 5},
        {id: "2", message: "I`am fine, thanks you", likesCount: 10},
        {id: "3", message: "Very good!", likesCount: 15},
    ] as Array<PostType>,
    newPostText: ""
}

export const profileReducer = (state: ProfileInitialStateType = initialState,
                               action: ProfileAcType): ProfileInitialStateType => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: "10", message: state.newPostText, likesCount: 0}],
                newPostText: ""
            }
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText}

        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state
    }
}
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

export const addPostActionCreator = () => {
    return {type: ADD_POST} as const
}
export const updatePostActionCreator = (text: string) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text} as const
}
export const setUserProfile = (profile: any) => {
    return {type: SET_USER_PROFILE, profile} as const
}

//---- thunks -----
export const getUsersProfile = (userID: number) => {
    return (dispatch: any) => {
        usersAPI.setUsers(userID)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
}