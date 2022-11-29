import {connect} from "react-redux";
import {
    follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, toggleIsFollowingProgress, unfollow,
} from "../../redux/users_reducer";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import {Users} from "./Users";
import Preloader from "../common/Preloader/Preloader";
import s from "./Users.module.css"
import {usersAPI} from "../../api/api";


export type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchStateToPropsType = ReturnType<typeof follow>
    & ReturnType<typeof unfollow>
    & ReturnType<typeof setUsers>
    & ReturnType<typeof setCurrentPage>
    & ReturnType<typeof setTotalUsersCount>
    & ReturnType<typeof toggleIsFetching>
type UsersAPIComponentPropsType = MapStateToPropsType & MapDispatchStateToPropsType & any
//РАЗОБРАТЬСЯ С ТИПИЗАЦИЕЙ ----------------------------------------------------------!!!!

//class component container
class UsersContainer extends React.Component<UsersAPIComponentPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)

        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items);
            })
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
                   toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
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
        follow, unfollow, setUsers, setCurrentPage,
        setTotalUsersCount, toggleIsFetching, toggleIsFollowingProgress
    }
)(UsersContainer);

// const mapDispatchToProps = (dispatch: Dispatch<UsersAcType>) => {
//     return {
//         follow: (userID: number) => dispatch(follow_AC(userID)),
//         unfollow: (userID: number) => dispatch(unfollow_AС(userID)),
//         setUsers: (users: Array<UserType>) => dispatch(setUsers_AC(users)),
//         setCurrentPage: (currentPage: number) => dispatch(setCurrentPage_AC(currentPage)),
//         setTotalUsersCount: (totalCount: number) => dispatch(setTotalUsersCount_AC(totalCount)),
//         toggleIsFetching: (isFetching: boolean) => dispatch(toggleIsFetching_AC(isFetching))
//     }
// }
