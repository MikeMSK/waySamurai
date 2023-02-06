import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {ProfilePropsType} from "./MyPostsContainer";
import {Field, reduxForm} from "redux-form";


export const MyPosts = (props: ProfilePropsType) => {

    let postsElements = props.profilePage.posts.map(p => <Post key={p.id}
                                                               message={p.message}
                                                               likesCount={p.likesCount}/>)
    const onAddPost = (values: any) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>

            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>)
};



const AddNewPostForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'}
                       name={'newPostText'}
                       placeholder={'Enter your message'}/>
            </div>
            <div>
                <button>add post</button>
            </div>
        </form>

    )
}
const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);