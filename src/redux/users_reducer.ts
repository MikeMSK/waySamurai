export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: { country: string, city: string }
}
export type InitialStateType = {
    users: Array<UserType>
}
export type UsersAcType = ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAС>
    | ReturnType<typeof setUsersAC>


let initialState: InitialStateType = {
    users: []
};

export const usersReducer = (state: InitialStateType = initialState,
                             action: UsersAcType): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
};

export const followAC = (userID: number) => {
    return {type: FOLLOW, userID} as const
}
export const unfollowAС = (userID: number) => {
    return {type: UNFOLLOW, userID} as const
}
export const setUsersAC = (users: Array<UserType>) => {
    return {type: SET_USERS, users} as const
}

export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET-USERS'