import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Header} from "./Header";
import axios from "axios";
import {followSuccess} from "../../redux/users_reducer";
import {getAuthUserData, setAuthUserData} from "../../redux/auth-reducer";
import {authAPI, usersAPI} from "../../api/api";

export type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchStateToPropsType = ReturnType<typeof setAuthUserData>
type HeaderComponentPropsType = MapStateToPropsType & MapDispatchStateToPropsType & any


class HeaderContainer extends React.Component<HeaderComponentPropsType> {

    componentDidMount() {
        this.props.authorize()
    }

    render() {
        return <Header {...this.props}/>
    }
}

//---------------------------------------------------------------------------
const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(mapStateToProps, {authorize: getAuthUserData})(HeaderContainer);
