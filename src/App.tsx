import React from 'react';
import s from "./App.module.css";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile"
import {Routes, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

export const App = () => {

    return <div className={s.app_wrapper}>
        <Header/>
        <Navbar/>
        <Navbar/>

        <div className={s.app_wrapper_content}>ß
            <Routes>
                <Route path={"/profile"}
                       element={<Profile/>}/>
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


