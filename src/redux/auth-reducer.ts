export type authInitialStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
export type AuthAcType = ReturnType<typeof setAuthUserData>

let initialState: authInitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}


export const authReducer = (state = initialState,
                            action: AuthAcType) => {
    switch (action.type) {
        case SET_USER_DATE:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}
export const setAuthUserData = (userId: number | null,
                                email: string | null,
                                login: string | null) => {
    return {type: SET_USER_DATE, data: {userId, email, login}} as const
}

export const SET_USER_DATE = 'SET-USER-DATE'