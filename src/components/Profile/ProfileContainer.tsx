import React, {JSXElementConstructor} from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUsersProfile, setUserProfile} from "../../redux/profile_reducer";
import {Profile} from "./Profile";
import {Navigate, useLocation, useNavigate, useParams} from "react-router-dom";
import {compose} from "redux";

// export type ProfileContainerType11 = {
//     profile: {
//         aboutMe: string,
//         contacts: {
//             facebook: string
//             github: string
//             instagram: string
//             mainLink: string
//             twitter: string
//             vk: string
//             website: string
//             youtube: string
//         },
//         fullName: string
//         lookingForAJob: true,
//         lookingForAJobDescription: string,
//         photos: {
//             large: string
//             small: string
//         }
//         userId: string
//     }
//     router: {
//         location: {
//             hash: string
//             key: string
//             pathname: string
//             search: string
//             state: null
//         },
//         params: { userId: string },
//         navigate: {
//             length: number
//             name: string
//             // prototype : constructor
//             arguments: string[]
//             caller: string[]
//         }
//     }
//     setUserProfile: () => void
// }
type MapStateToPropsType = ReturnType<typeof mapStateToProps> | { isAuth: any }
type MapDispatchStateToPropsType = ReturnType<typeof setUserProfile>
type PropsType = {
    router: { params: { userId: number } }
    setUserProfile: any
    getUsersProfile: any
}
type ProfileContainerType = MapStateToPropsType
    & MapDispatchStateToPropsType
    & PropsType


export class ProfileContainer extends React.Component<ProfileContainerType> {

    componentDidMount() {
        let userID = this.props.router.params.userId;
        if (userID === undefined) {
            userID = 2
        }
        this.props.getUsersProfile(userID)
    }

    render() {
        if (!this.props.isAuth) {
            return <Navigate replace to={'/login'}/>
        }
        return <Profile {...this.props}
                        profile={this.props.profile}/>
    }
}

//-----------------------------------------------------------------------------------------
const mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

//???????????????? ?????? ?????????????????? ?????????????????? ?? ????????????????????????
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

export default compose<React.ComponentType>(connect(
    mapStateToProps,
    {getUsersProfile}), withRouter)(ProfileContainer);
