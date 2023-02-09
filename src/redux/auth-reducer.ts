import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";


let initialState: authInitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

export const authReducer = (state = initialState, action: AuthAcType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.payload}
        case GET_CAPTCHA_URL_SUCCESS:
            return {...state, ...action.payload}
        default:
            return state
    }
}

//action creator
export const setAuthUserDataAC = (
    userId: number | null, email: string | null, login: string | null, isAuth: boolean, captchaUrl: string | null) => {
    return {type: SET_USER_DATA, payload: {userId, email, login, isAuth, captchaUrl}} as const
}
export const getCaptchaUrlSuccessAC = (captchaUrl: string | null) => {
    return {type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}} as const
}

//---- thunks -----
export const getAuthUserDataTC = () => {
    return (dispatch: any) => {
        authAPI.authorizeME()
            .then(res => {
                if (res.resultCode === 0) {
                    let {id, email, login} = res.data
                    dispatch(setAuthUserDataAC(id, email, login, true, null))
                }
            })
            .catch((err) => err)
    }
}
export const loginTC = (email: string, password: string, rememberMe: boolean, captcha: string) => {
    return (dispatch: any) => {
        dispatch(stopSubmit('login', {email: 'Email is wrong'}))
        return
        authAPI.login(email, password, rememberMe, captcha)
            .then(res => {
                if (res.resultCode === 0) {
                    dispatch(getAuthUserDataTC())
                }
                if (res.resultCode === 1) {

                }
                if (res.resultCode === 10) {
                    dispatch(getCaptchaUrlTC())
                }
            })
            .catch((err) => err.messages)
    }
}
export const logoutTC = () => {
    return (dispatch: any) => {
        authAPI.logout()
            .then(res => {
                if (res.resultCode === 0) {
                    dispatch(setAuthUserDataAC(null, null, null, false, null))
                }
            })
            .catch((err) => err)
    }
}
export const getCaptchaUrlTC = () => {
    return (dispatch: any) => {
        securityAPI.getCaptchaUrl()
            .then(res => {
                console.log('yes')
                dispatch(getCaptchaUrlSuccessAC(res.url))
            })
    }
}

//types
export type authInitialStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    captchaUrl: string | null
}
export type AuthAcType =
    | ReturnType<typeof setAuthUserDataAC>
    | ReturnType<typeof getCaptchaUrlSuccessAC>

// const
export const SET_USER_DATA = 'samurai-network/auth/SET-USER-DATa'
export const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET-CAPTCHA-URL-SUCCESS'