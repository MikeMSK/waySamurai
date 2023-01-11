import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import imgNoAva from './../../../img/No-avatar.jpeg'
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";

type ProfilePropsType = {
    profile: any
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
                    : <img src={imgNoAva}/>}

                <ProfileStatus status={'Hello'}/>

                <div>{props.profile.data.fullName}</div>
            </div>
        </div>)
};
