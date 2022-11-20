import React from 'react';
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import {SidebarContainer} from "./Sidebar/SidebarContainer";

// type PropsSidebarType = {
//     sidebar: Array<SidebarType>
// }

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.navbar}>
                <div>
                    <NavLink to={"/profile"}
                             className={navData => navData.isActive ? s.active : s.item}>
                        Profile</NavLink>
                </div>
                <div>
                    <NavLink to={"/dialogs"}
                             className={navData => navData.isActive ? s.active : s.item}>
                        Messages</NavLink>
                </div>
                <div>
                    <NavLink to={"/users"}
                             className={navData => navData.isActive ? s.active : s.item}>
                        Friends</NavLink>
                </div>
                <div>
                    <NavLink to={"/news"}
                             className={navData => navData.isActive ? s.active : s.item}>
                        News</NavLink>
                </div>
                <div>
                    <NavLink to={"/music"}
                             className={navData => navData.isActive ? s.active : s.item}>
                        Music</NavLink>
                </div>
                <div>
                    <NavLink to={"/setting"}
                             className={navData => navData.isActive ? s.active : s.item}>
                        Setting</NavLink>
                </div>
            </div>
            <SidebarContainer/>
        </nav>
    );
};
