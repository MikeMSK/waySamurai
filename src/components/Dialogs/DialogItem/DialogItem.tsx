import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type PropsDialogItemType = {
    id: string
    name: string
}
export const DialogItem = (props: PropsDialogItemType) => {
    const path = '/dialogs/' + props.id

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>
            <div className={s.messagePost}>
                <div className={s.imgMessagePost}>
                    <img src="https://www.blexar.com/avatar.png" alt="img"/>
                </div>
                <div>{props.name}</div>
            </div>
        </NavLink>
    </div>
};