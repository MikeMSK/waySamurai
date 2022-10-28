import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {
    ActionType,
    addPostActionCreator,
    GeneralStoreType,
    PostType,
    updatePostActionCreator,
} from "../../../redux/state";
import {MyPosts} from "./MyPosts";

type PropsMyPostsContainerType = {
    store: GeneralStoreType
}

export const MyPostsContainer = (props: PropsMyPostsContainerType) => {

    let state = props.store.getState()

    const addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    const onPostChange = (text: string) => {
        props.store.dispatch(updatePostActionCreator(text))
    }

    return <MyPosts posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}
                    addPost={addPost}
                    updateNewPostText={onPostChange}/>
};