import React from 'react';
import s from "./Users.module.css"
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from "../../assets/images/user-latin-woman.jpeg"

export class Users extends React.Component {
    //если стандартное поведение можно не писать
    //@ts-ignore
    constructor(props) {
        super(props);
    }

    getUser = () => {
        //@ts-ignore
        if (this.props.usersPage.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    //@ts-ignore
                    this.props.setUsers(response.data.items);
                })
        }
    }

    render() {
        return <div>

            <button onClick={this.getUser}>get User!</button>
            {/*@ts-ignore*/}
            {this.props.usersPage.users.map(u => {
                return <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto}
                            //u.photos.small || userPhoto
                             alt="users"
                             className={s.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            //@ts-ignore
                            ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                            //@ts-ignore
                            : <button onClick={() => this.props.follow(u.id)}>Follow</button>}
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
}
