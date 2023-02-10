import {connect} from "react-redux";
import {
    followTC, requestUsersTC,
    setCurrentPageAC,
    unfollowTC,
} from "../../redux/users_reducer";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import {Users} from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";

class UsersContainer extends React.Component<UsersAPIComponentPropsType> {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.requestUsers(pageNumber, this.props.pageSize)
        this.props.setCurrentPage(pageNumber)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}

            <Users users={this.props.users}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   totalUsersCount={this.props.totalUsersCount}
                   followingInProgress={this.props.followingInProgress}

                   follow={this.props.follow}
                   unfollow={this.props.unfollow}

                   onPageChanged={this.onPageChanged}/>
        </>
    }
}

//props
const mapStateToProps = (state: AppStateType) => ({
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
})

// --- compose --- connect --- HOC
export default compose<React.ComponentType>(connect(
    mapStateToProps,
    {follow: followTC, unfollow: unfollowTC, requestUsers: requestUsersTC, setCurrentPage: setCurrentPageAC}),
)(UsersContainer);

//types
export type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchStateToPropsType =
    | ReturnType<typeof followTC>
    | ReturnType<typeof unfollowTC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof requestUsersTC>
type UsersAPIComponentPropsType = MapStateToPropsType & MapDispatchStateToPropsType & any