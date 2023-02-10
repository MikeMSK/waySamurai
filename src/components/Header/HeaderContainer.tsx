import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Header} from "./Header";
import {logoutTC, setAuthUserDataAC} from "../../redux/auth-reducer";
import {compose} from "redux";


class HeaderContainer extends React.Component<HeaderComponentPropsType> {
    render() {
        return <Header {...this.props}/>
    }
}

//props
const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

// --- compose --- connect --- HOC
export default compose<React.ComponentType>(connect(
    mapStateToProps,
    {logout: logoutTC})
)(HeaderContainer)

//types
export type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchToPropsType = ReturnType<typeof setAuthUserDataAC>
export type HeaderComponentPropsType = MapStateToPropsType & MapDispatchToPropsType & any