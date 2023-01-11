import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    profile: any
    status: string
    updateStatus: (value: string) => void
}

export const Profile = (props: ProfilePropsType) => {

    return <div>
        <ProfileInfo profile={props.profile}
                     status={props.status}
                     updateStatus={props.updateStatus}/>
        <MyPostsContainer/>
    </div>
};

