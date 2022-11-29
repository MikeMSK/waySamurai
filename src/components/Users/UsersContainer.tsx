import {connect} from "react-redux";
import {
    follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow,
} from "../../redux/users_reducer";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import Preloader from "../common/Preloader/Preloader";
import s from "./Users.module.css"


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
    //если стандартное поведение можно не писать
    //конструирование обьекта осуществляется только 1 раз
    // constructor(props: any) {
    //     super(props);
    // }

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
            {
                withCredentials: true,
                headers: {
                    'API-KEY': '5a806959-8f18-4ed7-837f-0bbad2316e6b'
                }
            })
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
            {
                withCredentials: true,
                headers: {
                    'API-KEY': '5a806959-8f18-4ed7-837f-0bbad2316e6b'
                }
            })
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items);
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}

            <Users pageSize={this.props.pageSize}
                   usersPage={this.props.usersPage}
                   currentPage={this.props.currentPage}
                   totalUsersCount={this.props.totalUsersCount}

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
    }
}

export default connect(
    mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching,}
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
