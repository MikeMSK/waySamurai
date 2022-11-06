import React from 'react';
import s from '../Navbar.module.css'
import {SidebarPropsType} from "./SidebarContainer";


export const Sidebar = (props: SidebarPropsType) => {


    return <span className={s.styleSidebar}>

        {props.sidebarPage.friend.map(s => {
            const addAlert = () => props.addAlert()

            return <span key={s.id}
                         onClick={addAlert}>
                <div>
                    <img src="https://www.blexar.com/avatar.png" alt="img"/>
                </div>
                <div>
                    {s.name}
                </div>
            </span>
        })}
    </span>
};
