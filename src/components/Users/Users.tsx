import React from 'react';
import s from "./Users.module.css"
import userPhoto from "../../assets/images/user-latin-woman.jpeg"
import {toggleIsFollowingProgress, UsersInitialStateType} from "../../redux/users_reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";

type UsersPropsType = {
    pageSize: number,
    currentPage: number
    totalUsersCount: number,
    usersPage: UsersInitialStateType
    followingInProgress: Array<number>

    follow: (userID: number) => void
    unfollow: (userID: number) => void

    onPageChanged: (pageNumber: number) => void
    toggleIsFollowingProgress: (followingInProgress: boolean, userId: number) => void
}


export const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil((props.totalUsersCount / 20) / props.pageSize);
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
                        <NavLink to={`/profile/${u.id}`}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                 alt="users"
                                 className={s.userPhoto}/>
                            </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {
                                          props.toggleIsFollowingProgress(true, u.id)
                                          usersAPI.follow(u.id)
                                              .then(data => {
                                                  if (data.resultCode === 0) {
                                                      props.unfollow(u.id)
                                                  }
                                                  props.toggleIsFollowingProgress(false, u.id)
                                              })
                                      }}>Unfollow</button>
                            //@ts-ignore
                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {
                                          props.toggleIsFollowingProgress(true, u.id)
                                          usersAPI.unfollow(u.id)
                                              .then(data => {
                                                  if (data.resultCode === 0) {
                                                      props.follow(u.id)
                                                  }
                                                  props.toggleIsFollowingProgress(false, u.id)
                                              })
                                      }}>Follow</button>}
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
