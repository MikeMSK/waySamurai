import {connect} from "react-redux";
import {
    followSuccess,
    getUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFollowingProgress,
    unfollowSuccess,
} from "../../redux/users_reducer";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import {Users} from "./Users";
import Preloader from "../common/Preloader/Preloader";
import s from "./Users.module.css"

export type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchStateToPropsType = ReturnType<typeof followSuccess>
    & ReturnType<typeof unfollowSuccess>
    & ReturnType<typeof setCurrentPage>
    & ReturnType<typeof setTotalUsersCount>
    & ReturnType<typeof getUsers>
type UsersAPIComponentPropsType = MapStateToPropsType & MapDispatchStateToPropsType & any

//РАЗОБРАТЬСЯ С ТИПИЗАЦИЕЙ ----------------------------------------------------------!!!!


class UsersContainer extends React.Component<UsersAPIComponentPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}

            <Users pageSize={this.props.pageSize}
                   usersPage={this.props.usersPage}
                   currentPage={this.props.currentPage}
                   totalUsersCount={this.props.totalUsersCount}
                   followingInProgress={this.props.followingInProgress}

                   follow={this.props.follow}
                   unfollow={this.props.unfollow}

                   onPageChanged={this.onPageChanged}
            />
        </>
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(
    mapStateToProps,
    {
        follow: followSuccess, unfollow: unfollowSuccess, setCurrentPage,
        toggleIsFollowingProgress, getUsers
    }
)(UsersContainer);
