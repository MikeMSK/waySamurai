import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {ProfilePropsType} from "./MyPostsContainer";

export const MyPosts = (props: ProfilePropsType) => {

    const onClickHandler = () => {
        props.addPost()
    }
    const onchangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    let postsElements = props.profilePage.posts.map(p => <Post key={p.id}
                                                               message={p.message}
                                                               likesCount={p.likesCount}/>)
    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea placeholder={'enter new post!!!'}
                          onChange={onchangeHandler}
                          value={props.profilePage.newPostText}/>
            </div>
            <div>
                <button onClick={onClickHandler}>add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
};