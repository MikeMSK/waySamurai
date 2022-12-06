import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import imgNoAva from './../../../img/No-avatar.jpeg'

type ProfilePropsType = {
    profile: any
}

export const ProfileInfo = (props: ProfilePropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img
                    src="https://static3.depositphotos.com/1000454/256/i/600/depositphotos_2567474-stock-photo-wide-panorama-of-french-alps.jpg"
                    alt="panorama"/>
            </div>
            <div className={s.descriptionBlock}>
                {props.profile.data !== undefined
                    ? <img src={props.profile.data.photos.large}/>
                    : <img src={imgNoAva}/>}

                <div>{props.profile.data.fullName}</div>
            </div>
        </div>)
};
