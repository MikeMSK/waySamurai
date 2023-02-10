import React from 'react';
import s from "./App.module.css";
import {Navbar} from "./components/Navbar/Navbar";
import {Routes, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer, {withRouter} from "./components/Profile/ProfileContainer";
import HeaderContainer, {} from "./components/Header/HeaderContainer";
import Login from "./login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeAppTC} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import Preloader from "./components/common/Preloader/Preloader";


class App extends React.Component <AppPropsType> {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className={s.app_wrapper}>
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
            </div>)
    }
}

//props
const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})
const mapDispatchToProps = (dispatch: any) => ({
    initializeApp: () => dispatch(initializeAppTC())
})

// --- compose --- connect --- HOC
export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(App)

//types
type AppPropsType =
    & ReturnType<typeof mapDispatchToProps>
    & ReturnType<typeof mapStateToProps>