import React from 'react';
import s from "./Users.module.css"
import userPhoto from "../../assets/images/user-latin-woman.jpeg"
import {UsersInitialStateType} from "../../redux/users_reducer";

type UsersPropsType = {
    pageSize: number,
    currentPage: number
    totalUsersCount: number,
    usersPage: UsersInitialStateType

    follow: (userID: number) => void
    unfollow: (userID: number) => void

    onPageChanged: (pageNumber: number) => void
}


export const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map((p, index) => {
                return <span className={props.currentPage === p ? s.selectedPage : ""}
                             onClick={(e) => props.onPageChanged(p)}
                             key={index}>
                        {p}
                    </span>
            })}
        </div>
        {props.usersPage.users.map(u => {
            return <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto}
                             alt="users"
                             className={s.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                            : <button onClick={() => props.follow(u.id)}>Follow</button>}
                    </div>
                </span>
                <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                    {/*временно удалены так как не приходят с сервера*/}
                    {/*<span>*/}
                    {/*    <div>{u.location.country}</div>*/}
                    {/*    <div>{u.location.city}</div>*/}
                    {/*</span>*/}
                    </span>
            </div>
        })}
    </div>
}
