import React, {JSXElementConstructor} from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getStatusTC, getUsersProfileTC, updateStatusTC} from "../../redux/profile_reducer";
import {Profile} from "./Profile";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {compose} from "redux";
import {witAuthRedirect} from "../../hoc/withAuthRedirect";


export class ProfileContainer extends React.Component<ProfileContainerType> {
    componentDidMount() {
        let userID = this.props.router.params.userId;
        if (!userID) {
            // @ts-ignore
            userID = this.props.authorizedUserId
            if (!userID) {
                // @ts-ignore
                this.props.history.push('/login')
            }

        }
        this.props.getUsersProfile(userID)
        this.props.getStatus(userID)
    }

    render() {
        return <Profile {...this.props}
                        profile={this.props.profile}
                        status={this.props.status}
                        updateStatus={this.props.updateStatus}/>
    }
}

//props
const mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

//оболочка для классовой компонеты и контейнерной
export const withRouter = (Component: JSXElementConstructor<any>): JSXElementConstructor<any> => {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return <Component {...props}
                          router={{location, navigate, params}}/>
    }

    return ComponentWithRouterProp;
}

// --- compose --- connect --- HOC
export default compose<React.ComponentType>(connect(
        mapStateToProps,
        {getUsersProfile: getUsersProfileTC, getStatus: getStatusTC, updateStatus: updateStatusTC}),
    withRouter, witAuthRedirect)
(ProfileContainer)

// --- type
type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchStateToPropsType = ReturnType<typeof getUsersProfileTC>
    | ReturnType<typeof getStatusTC>
    | ReturnType<typeof updateStatusTC>
type PropsType = {
    router: { params: { userId: number } }
    setUserProfile: (userID: number) => void
    getUsersProfile: (userID: number) => void
    getStatus: (userID: number) => void
    updateStatus: (value: string) => void
}
type ProfileContainerType = PropsType
    & MapStateToPropsType
    & MapDispatchStateToPropsType