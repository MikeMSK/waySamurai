import {connect} from "react-redux";
import {
    followTC,
    getUsersTC,
    setCurrentPage,
    unfollowTC,
} from "../../redux/users_reducer";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import {Users} from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {witAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class UsersContainer extends React.Component<UsersAPIComponentPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
        this.props.setCurrentPage(pageNumber)
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

                   onPageChanged={this.onPageChanged}/>
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

// --- compose --- connect --- HOC
export default compose<React.ComponentType>(
    witAuthRedirect,
    connect(mapStateToProps, {
        follow: followTC, unfollow: unfollowTC,
        getUsers: getUsersTC, setCurrentPage,
    })
)(UsersContainer);


export type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchStateToPropsType =
    | ReturnType<typeof followTC>
    | ReturnType<typeof unfollowTC>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof getUsersTC>
// type PropsType = {
//     ??????
// }
type UsersAPIComponentPropsType = MapStateToPropsType & MapDispatchStateToPropsType & any