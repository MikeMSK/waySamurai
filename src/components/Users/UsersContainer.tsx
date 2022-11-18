import {connect} from "react-redux";
import {
    follow_AC, setCurrentPage_AC, setTotalUsersCount_AC, setUsers_AC, unfollow_AС,
    UsersAcType, UsersInitialStateType, UserType
} from "../../redux/users_reducer";
import {AppStateType} from "../../redux/redux-store";
import React, {Dispatch} from "react";
import axios from "axios";
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
type UsersAPIComponentPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<UsersAPIComponentPropsType> {
    //если стандартное поведение можно не писать
    //конструирование обьекта осуществляется только 1 раз
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }

    render() {
        return <Users pageSize={this.props.pageSize}
                      usersPage={this.props.usersPage}
                      currentPage={this.props.currentPage}
                      totalUsersCount={this.props.totalUsersCount}

                      follow={this.props.follow}
                      unfollow={this.props.unfollow}

                      onPageChanged={this.onPageChanged}
        />
    }
}


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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);