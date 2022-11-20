import React, {JSXElementConstructor} from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import axios from "axios";
import Preloader from "../common/Preloader/Preloader";
import {setUserProfile} from "../../redux/profile_reducer";
import {Profile} from "./Profile";
import {useLocation, useMatch, useNavigate, useParams} from "react-router-dom";
import {compose} from "redux";


export class ProfileContainer extends React.Component<any> {
    //если стандартное поведение можно не писать
    //конструирование обьекта осуществляется только 1 раз
    // constructor(props: any) {
    //     super(props);
    // }


    componentDidMount() {
        let userID = this.props.router.params.userId;
        if (!userID) {
            userID = 2
        }
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userID)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}

            <Profile {...this.props} profile={this.props.profile}/>
        </>
    }
}


const mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile,
        // status: state.profilePage
    }
}

//оболочка для классовой компонеты и контейнерной
export const withRouter = (Component: JSXElementConstructor<any>): JSXElementConstructor<any> => {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();

        return <Component {...props}
                          router={{location, navigate, params}}
        />
    }

    return ComponentWithRouterProp;
}

// let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default compose<React.ComponentType>(connect(mapStateToProps, {setUserProfile}), withRouter)(ProfileContainer);

// MyPostsContainer