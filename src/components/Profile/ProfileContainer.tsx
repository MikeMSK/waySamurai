import React, {JSXElementConstructor} from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getStatus, getUsersProfile, setUserProfile, updateStatus} from "../../redux/profile_reducer";
import {Profile} from "./Profile";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {compose} from "redux";
import {witAuthRedirect} from "../../hoc/withAuthRedirect";

// --- type
type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchStateToPropsType = ReturnType<typeof getUsersProfile>
    | ReturnType<typeof getStatus>
    | ReturnType<typeof updateStatus>
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


export class ProfileContainer extends React.Component<ProfileContainerType> {

    componentDidMount() {
        let userID = this.props.router.params.userId;
        if (userID === undefined) {
            userID = 23033
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

const mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
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
export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUsersProfile, getStatus, updateStatus}),
    withRouter,
    witAuthRedirect
)(ProfileContainer)
