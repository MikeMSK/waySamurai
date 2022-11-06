import React from 'react';
import s from '../Navbar.module.css'
import {SidebarType} from "../../../redux/store";

type PropsSidebarType = {
    sidebar: Array<SidebarType>
    addAlert: () => void
}

export const Sidebar = (props: PropsSidebarType) => {

    return <span className={s.styleSidebar}>
        {props.sidebar.map(s => {
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
