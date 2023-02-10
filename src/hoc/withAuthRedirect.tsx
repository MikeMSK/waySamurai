import React, {ComponentType} from 'react';
import {Navigate} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";
import {compose} from "redux";


export function witAuthRedirect(Component: ComponentType) {

    const RedirectComponent = (props: MapStateToPropsType) => {

        let {isAuth, ...restProps} = props

        if (!isAuth) {
            return <Navigate replace to={'/login'}/>
        }
        return <Component {...restProps}/>
    }

//props
    const mapStateToPropsForRedirect = (state: AppStateType): MapStateToPropsType => ({
        isAuth: state.auth.isAuth
    });

// --- compose --- connect --- HOC
    return compose<React.ComponentType>(connect(mapStateToPropsForRedirect))
    (RedirectComponent);
}

//types
type MapStateToPropsType = {
    isAuth: boolean
}