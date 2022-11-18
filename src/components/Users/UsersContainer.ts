import {connect} from "react-redux";
import {
    follow_AC, setCurrentPage_AC, setTotalUsersCount_AC, setUsers_AC, unfollow_AС,
    UsersAcType, UsersInitialStateType, UserType
} from "../../redux/users_reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "react";
import {Users} from "./Users";

export type MapStateToPropsType = {
    usersPage: UsersInitialStateType
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
}
export type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}
// export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {

    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch<UsersAcType>): MapDispatchToPropsType => {
    return {
        follow: (userID: number) => dispatch(follow_AC(userID)),
        unfollow: (userID: number) => dispatch(unfollow_AС(userID)),
        setUsers: (users: Array<UserType>) => dispatch(setUsers_AC(users)),
        setCurrentPage: (currentPage: number) => dispatch(setCurrentPage_AC(currentPage)),
        setTotalUsersCount: (totalCount: number) => dispatch(setTotalUsersCount_AC(totalCount))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);