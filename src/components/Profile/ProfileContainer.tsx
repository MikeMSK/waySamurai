import React, {JSXElementConstructor} from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import axios from "axios";
import {setUserProfile} from "../../redux/profile_reducer";
import {Profile} from "./Profile";
import {useLocation, useNavigate, useParams} from "react-router-dom";
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
type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchStateToPropsType = ReturnType<typeof setUserProfile>
type PropsType = {
    router: { params: { userId: number } }
    setUserProfile: any
}
type ProfileContainerType = MapStateToPropsType
    & MapDispatchStateToPropsType
    & PropsType


export class ProfileContainer extends React.Component<ProfileContainerType> {

    componentDidMount() {
        let userID = this.props.router.params.userId;
        if (!userID) userID = 2
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userID)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        console.log(this.props)
        return <Profile {...this.props}
                        profile={this.props.profile}/>
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile,
    }
}

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

export default compose<React.ComponentType>(connect(mapStateToProps,
    {setUserProfile}), withRouter)(ProfileContainer);
