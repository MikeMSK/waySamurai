import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Header} from "./Header";
import {getAuthUserDataTC, logoutTC, setAuthUserDataAC} from "../../redux/auth-reducer";
import {compose} from "redux";


class HeaderContainer extends React.Component<HeaderComponentPropsType> {

    componentDidMount() {
        this.props.authorize()
    }

    render() {
        return <Header {...this.props}/>
    }
}

//---------------------------------------------------------------------------
const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default compose<React.ComponentType>(connect(
    mapStateToProps,
    {authorize: getAuthUserDataTC, logout: logoutTC})
)(HeaderContainer)


//types
export type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchStateToPropsType = ReturnType<typeof setAuthUserDataAC>
export type HeaderComponentPropsType = MapStateToPropsType & MapDispatchStateToPropsType & any