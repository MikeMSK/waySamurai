import React from 'react';
import s from "./Users.module.css"
import userPhoto from "../../assets/images/user-latin-woman.jpeg"
import {
    followTC,
    setCurrentPage,
    toggleIsFollowingProgress,
    unfollowTC,
    UsersInitialStateType
} from "../../redux/users_reducer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    pageSize: number,
    currentPage: number
    totalUsersCount: number,
    usersPage: UsersInitialStateType
    followingInProgress: Array<number>

    follow: (userID: number) => void
    unfollow: (userID: number) => void

    onPageChanged: (pageNumber: number) => void
}


export const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil((props.totalUsersCount / 50) / props.pageSize);
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map((p, index) => {
                    // console.log(props.currentPage)
                    return <span className={props.currentPage === p ? s.selectedPage : ""}
                                 onClick={() => props.onPageChanged(p)}
                                 key={index}>
                        {p}
                    </span>
                })}
            </div>
            {props.usersPage.users.map(user => {
                return <div key={user.id}>
                <span>
                    <div>
                        <NavLink to={`/profile/${user.id}`}>
                            <img src={user.photos.small !== null ? user.photos.small : userPhoto}
                                 alt="users"
                                 className={s.userPhoto}/>
                            </NavLink>
                    </div>

                    <div>
                        {user.followed
                            ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                                      onClick={() => props.unfollow(user.id)}>
                                Unfollow
                            </button>
                            : <button disabled={props.followingInProgress.some(id => id === user.id)}
                                      onClick={() => props.follow(user.id)}>
                                Follow
                            </button>}
                    </div>
                </span>
                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                    </span>
                </div>
            })}
        </div>)
}
