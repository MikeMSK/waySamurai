import React from 'react';
import s from './Login.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../components/common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../utils/validators/validators";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const maxLength20 = maxLengthCreator(20)

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'}
                       name={'login'}
                       component={Input}
                       validate={[required, maxLength20]}
                       type={'text'}/>
            </div>
            <div>
                <Field placeholder={'Password'}
                       name={'password'}
                       component={Input}
                       validate={[required, maxLength20]}
                       type={'text'}/>
            </div>
            <div>
                <Field name={'Remember me'}
                       component={Input}
                       type={'checkbox'}/>Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <div className={s.loginPage}>
            <h3>Login</h3>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)
