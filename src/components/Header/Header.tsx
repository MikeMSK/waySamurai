import React from "react";
import s from "./Header.module.css";

export const Header = () => {
    return (
        <header className={s.header}>
            {/*<img src="../img/rock.png" alt="logo"/>*/}
            <img src="https://logoza.ru/img/rock.png" alt="logo"/>
        </header>
    )
}