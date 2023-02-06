import React, {ComponentType} from 'react';
import {Navigate} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";
import {compose} from "redux";


const mapStateToPropsForRedirect = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth
});

export function witAuthRedirect(Component: ComponentType) {

    const RedirectComponent = (props: MapStateToPropsType) => {

        let {isAuth, ...restProps} = props
        if (!isAuth) {
            return <Navigate replace to={'/login'}/>
        }
        return <Component {...restProps}/>
    }

    return compose<React.ComponentType>(
        connect(mapStateToPropsForRedirect)
    )(RedirectComponent);
}

type MapStateToPropsType = {
    isAuth: boolean
}