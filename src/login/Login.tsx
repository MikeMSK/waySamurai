import React from 'react';
import s from './Login.module.css'


type LoginPropsType = {}

export const Login = (props: LoginPropsType) => {
    return (
        <div className={s.loginPage}>
            <div><span>Login: </span><input/></div>
            <div><span>Pasword: </span><input/></div>
        </div>
    );
};

