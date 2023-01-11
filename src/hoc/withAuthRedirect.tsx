import React from 'react';
import {Navigate} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";
import {compose} from "redux";


const mapStateToPropsForRedirect = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
});

export const witAuthRedirect = (Component: any) => {

    class RedirectComponent extends React.Component {
        render() {
            //@ts-ignore
            if (!this.props.isAuth) {
                return <Navigate replace to={'/login'}/>
            }
            return <Component {...this.props}/>
        }
    }

    return compose(
        connect(mapStateToPropsForRedirect)
    )(RedirectComponent);
}
