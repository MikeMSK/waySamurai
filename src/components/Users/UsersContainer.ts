import {connect} from "react-redux";
import {
    followAC, setUsersAC, unfollowAС,
    UsersAcType, UsersInitialStateType, UserType
} from "../../redux/users_reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "react";
import {Users} from "./Users";

type MapStateToPropsType = {
    usersPage: UsersInitialStateType
}
type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch<UsersAcType>): MapDispatchToPropsType => {
    return {
        follow: (userID: number) => dispatch(followAC(userID)),
        unfollow: (userID: number) => dispatch(unfollowAС(userID)),
        setUsers: (users: Array<UserType>) => dispatch(setUsersAC(users))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);