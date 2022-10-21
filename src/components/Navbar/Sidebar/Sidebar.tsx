import React from 'react';
import s from '../Navbar.module.css'
import {SidebarType} from "../../../redux/state";

type PropsSidebarType = {
    sidebar: Array<SidebarType>
}

export const Sidebar = (props: PropsSidebarType) => {
    return <span className={s.styleSidebar}>
        {props.sidebar.map(s => {
            return <span key={s.id}>
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
