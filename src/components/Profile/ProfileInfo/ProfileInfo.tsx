import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";

type ProfilePropsType = {
    profile: any
    status: string
    updateStatus: (value: string) => void
}

export const ProfileInfo = (props: ProfilePropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                {props.profile.data !== undefined
                    ? <img src={props.profile.data.photos.large}/>
                    : <img src={"https://hornews.com/upload/images/blank-avatar.jpg"}/>}

                <ProfileStatus status={props.status}
                               updateStatus={props.updateStatus}/>

                <div>{props.profile.data.fullName}</div>
            </div>
        </div>)
};
