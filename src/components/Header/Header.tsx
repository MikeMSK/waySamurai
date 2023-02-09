import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {HeaderComponentPropsType} from "./HeaderContainer";


export const Header = (props: HeaderComponentPropsType) => {
    return (
        <header className={s.header}>
            <img src="https://logoza.ru/img/rock.png" alt="logo"/>

            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>
                        {props.login} -
                        <button onClick={props.logout}>Log out</button>
                    </div>
                    : <NavLink to={'/login'}> "Login"</NavLink>
                }
            </div>
        </header>
    )
}