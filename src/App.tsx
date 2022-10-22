import React from 'react';
import s from "./App.module.css";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile"
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Routes, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import {BrowserRouter} from "react-router-dom";
import {StateType} from "./redux/state";

type PropsStateType = {
    state: StateType
    dispatch: (action: {}) => void
}

export const App = (props: PropsStateType) => {

    return <BrowserRouter>
        <div className={s.app_wrapper}>
            <Header/>
            <Navbar sidebar={props.state.sidebar}/>

            <div className={s.app_wrapper_content}>
                <Routes>
                    <Route path={"/profile"}
                           element={<Profile profilePage={props.state.profilePage}
                                             dispatch={props.dispatch}/>}/>
                    <Route path={"/dialogs/*"}
                           element={<Dialogs messagesPage={props.state.dialogsPage}
                                             dispatch={props.dispatch}/>}/>

                    <Route path={"news"}
                           element={<News/>}/>
                    <Route path={"music"}
                           element={<Music/>}/>
                    <Route path={"setting"}
                           element={<Setting/>}/>
                </Routes>
            </div>
        </div>
    </BrowserRouter>
}


