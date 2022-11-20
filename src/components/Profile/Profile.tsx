import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProdilePropsType = {
    profile: any
}

export const Profile = (props: ProdilePropsType) => {

    return <div>
        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer/>
    </div>
};

