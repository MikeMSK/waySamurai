import React from 'react';
import s from "./Post.module.css"

type propsPostType = {
    message: string
    likesCount: number
}

export const Post = (props: propsPostType) => {
    return <div className={s.item}>
        <img src="https://www.blexar.com/avatar.png" alt="img"/>
        {props.message}
        <div>
            <span>like</span> {props.likesCount}
        </div>
    </div>
};

