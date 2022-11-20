import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";

type ProfilePropsType = {
    profile: any
}

export const ProfileInfo = (props: ProfilePropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return <div>
        <div>
            <img
                src="https://static3.depositphotos.com/1000454/256/i/600/depositphotos_2567474-stock-photo-wide-panorama-of-french-alps.jpg"
                alt="panorama"/>
        </div>
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large}/>
            Main content
        </div>
    </div>
};
