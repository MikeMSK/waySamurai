import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProdfilePropsType = {
    profile: any
}

export const Profile = (props: ProdfilePropsType) => {

    return <div>
        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer/>
    </div>
};

