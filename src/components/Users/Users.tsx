import React from 'react';
import s from "./Users.module.css"
import {UsersPropsType} from "./UsersContainer";

const Users = (props: UsersPropsType) => {

    if (props.usersPage.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://illustrators.ru/uploads/illustration/image/1232594/%D1%8B%D1%8B%D1%8B%D1%8B.png',
                followed: false,
                fullName: "Dima",
                status: "boss",
                location: {country: "Belarus", city: "Minsk"}
            },
            {
                id: 2,
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Pic-vk-allaboutme-ava-2.jpg',
                followed: true,
                fullName: "Misha",
                status: "enginer",
                location: {country: "Germany", city: "Hamburg"}
            },
            {
                id: 3,
                photoUrl: 'https://www.perunica.ru/uploads/posts/2019-03/1552932077_1.jpg',
                followed: false,
                fullName: "Andy",
                status: "student",
                location: {country: "Kongo", city: "Lubomo"}
            },
            {
                id: 4,
                photoUrl: 'https://freelance.ru/img/portfolio/pics/00/3E/A5/4105702.jpg',
                followed: true,
                fullName: "Roy",
                status: "teacher",
                location: {country: "Polska", city: "Lodz"}
            },
            {
                id: 5,
                photoUrl: 'https://abrakadabra.fun/uploads/posts/2022-03/1647903560_2-abrakadabra-fun-p-ava-na-telefon-dlya-patsanov-na-android-4.jpg',
                followed: false,
                fullName: "Milly",
                status: "badboy",
                location: {country: "Latvia", city: "Riga"}
            },
        ])
    }

    return <div>
        {props.usersPage.users.map(u => {
            return <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl}
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
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
            </div>
        })}
    </div>
};

export default Users;
