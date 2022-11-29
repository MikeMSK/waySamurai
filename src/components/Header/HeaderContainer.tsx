import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Header} from "./Header";
import axios from "axios";
import {follow} from "../../redux/users_reducer";
import {setAuthUserData} from "../../redux/auth-reducer";

export type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchStateToPropsType = ReturnType<typeof setAuthUserData>
type HeaderComponentPropsType = MapStateToPropsType & MapDispatchStateToPropsType & any


class HeaderContainer extends React.Component<HeaderComponentPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
