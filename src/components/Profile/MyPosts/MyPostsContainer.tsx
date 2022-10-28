import React from 'react';
import {addPostActionCreator, GeneralStoreType, updatePostActionCreator,} from "../../../redux/state";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext";

export const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store: GeneralStoreType) => {
                    let state = store.getState().profilePage
                    const addPost = () => {
                        store.dispatch(addPostActionCreator())
                    }
                    const onPostChange = (text: string) => {
                        store.dispatch(updatePostActionCreator(text))
                    }

                    return <MyPosts posts={state.posts}
                                    newPostText={state.newPostText}
                                    addPost={addPost}
                                    updateNewPostText={onPostChange}/>
                }}
        </StoreContext.Consumer>)
};