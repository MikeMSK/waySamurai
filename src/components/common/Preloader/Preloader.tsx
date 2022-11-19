import React from 'react';
import s from "../../Users/Users.module.css";
import preloader from "../../../img/Lazy-Loader.svg";


export const Preloader = () => {

    return <img className={s.imgSVG}
                src={preloader}/>
};

export default Preloader;
