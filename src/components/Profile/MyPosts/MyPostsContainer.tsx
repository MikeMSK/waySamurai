import React from 'react';
import {MyPosts} from "./MyPosts";
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/profile_reducer";
import {connect} from "react-redux";
import {ActionType, StateType} from "../../../redux/store";

const mapStateToProps = (state: StateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        addPost: () => dispatch(addPostActionCreator()),
        updateNewPostText: (text: string) => dispatch(updatePostActionCreator(text))
    }
}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
