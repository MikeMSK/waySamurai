import React from 'react';
import s from './Login.module.css'
import {Field, reduxForm} from "redux-form";
import {Input} from "../components/common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../utils/validators/validators";
import {connect} from "react-redux";
import {getCaptchaUrlTC, loginTC} from "../redux/auth-reducer";
import {Navigate, redirect, useNavigate} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";


const Login = (props: any) => {
    const navigate = useNavigate()
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
// warning ??? redirect <Navigate to={}/>
    if (props.isAuth) navigate("/profile")

    return (
        <div className={s.loginPage}>
            <h3>Login</h3>
            <LoginReduxForm onSubmit={onSubmit}
                // @ts-ignore
                            captchaUrl={props.captchaUrl}/>
        </div>

    );
};

//form
const LoginForm = ({handleSubmit, captchaUrl}: any) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'Email'}
                       name={'email'}
                       component={Input}
                       validate={[required, maxLength20]}
                       type={'text'}/>
            </div>
            <div>
                <Field placeholder={'Password'}
                       name={'password'}
                       component={Input}
                       validate={[required, maxLength20]}
                       type={'password'}/>
            </div>
            <div>
                <Field name={'Remember me'}
                       component={Input}
                       type={'checkbox'}/>
                Remember me
            </div>
            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && <Field placeholder={'Symbols from image'}
                                  name={'captcha'}
                                  component={Input}
                                  validate={[required, maxLength20]}
                                  type={'text'}/>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)


const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(
    mapStateToProps,
    {login: loginTC, getCaptchaUrl: getCaptchaUrlTC})
(Login);

//types
type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

//validate
const maxLength20 = maxLengthCreator(20)