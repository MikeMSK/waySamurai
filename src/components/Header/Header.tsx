import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

// type HeaderPropsType = {
//     login: string
// }

export const Header = (props: any) => {
    return (
        <header className={s.header}>
            <img src="https://logoza.ru/img/rock.png" alt="logo"/>

            <div className={s.loginBlock}>
                {props.isAuth
                    ? props.login
                    : <NavLink to={'/login'}> "Login"</NavLink>
                }

            </div>
        </header>
    )
}