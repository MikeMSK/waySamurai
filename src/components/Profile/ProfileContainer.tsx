import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../redux/users_reducer";
import {AppStateType} from "../../redux/redux-store";
import axios from "axios";
import Preloader from "../common/Preloader/Preloader";
import {Users} from "../Users/Users";
import {setUserProfile} from "../../redux/profile_reducer";
import {Profile} from "./Profile";

export class ProfileContainer extends React.Component<any> {
    //если стандартное поведение можно не писать
    //конструирование обьекта осуществляется только 1 раз
    // constructor(props: any) {
    //     super(props);
    // }

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
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
        profile: state.profilePage.profile
    }
}

export default connect(
    mapStateToProps,
    {setUserProfile}
)(ProfileContainer);

// MyPostsContainer