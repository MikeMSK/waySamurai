import React from 'react';
import s from "./App.module.css";
import {Navbar} from "./components/Navbar/Navbar";
import {Routes, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./login/Login";

export const App = () => {

    return <div className={s.app_wrapper}>
        <HeaderContainer/>
        <Navbar/>

        <div className={s.app_wrapper_content}>
            <Routes>
                <Route path={"/login"}
                       element={<Login/>}/>

                <Route path={"/profile"}
                       element={<ProfileContainer/>}/>
                <Route path={'/profile/:userId'}
                       element={<ProfileContainer/>}/>
                <Route path={"/dialogs/*"}
                       element={<DialogsContainer/>}/>

                <Route path={"/users/*"}
                       element={<UsersContainer/>}/>
                //--------------------------------------//
                <Route path={"news"}
                       element={<News/>}/>
                <Route path={"music"}
                       element={<Music/>}/>
                <Route path={"setting"}
                       element={<Setting/>}/>
            </Routes>
        </div>
    </div>
}


