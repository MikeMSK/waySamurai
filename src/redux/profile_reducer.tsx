import React from 'react';
import {ActionType, PostsType} from "./store";

const initialState: PostsType = {
    posts: [
        {id: "1", message: "Hi, how are you?", likesCount: 5},
        {id: "2", message: "I`am fine, thanks you", likesCount: 10},
        {id: "3", message: "Very good!", likesCount: 15},
    ],
    newPostText: ""
}
//: PostsType
export const profileReducer = (state = initialState, action: ActionType) => {

    let stateCopy2 = {...state, posts: [...state.posts]}

    switch (action.type) {
        case ADD_POST: {
            let newPost = {id: "10", message: state.newPostText, likesCount: 0}
            stateCopy2.posts.push(newPost);
            stateCopy2.newPostText = ''
            return stateCopy2
        }
        case UPDATE_NEW_POST_TEXT:
            stateCopy2.newPostText = action.newText
            return stateCopy2
        default:
            return state
    }
};

export const addPostActionCreator = () => {
    return {type: ADD_POST} as const
}
export const updatePostActionCreator = (text: string) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text} as const
}

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';