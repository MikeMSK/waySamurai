export type UserType = {
    // photos: string | undefined | any;
    name: string
    id: number
    photos: {
        small: string | undefined | any,
        large: string | undefined | any
    }
    status: string
    followed: boolean
    // location: { country: string, city: string }
}
export type UsersInitialStateType = {
    users: Array<UserType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
}
export type UsersAcType = ReturnType<typeof follow_AC>
    | ReturnType<typeof unfollow_AС>
    | ReturnType<typeof setUsers_AC>
    | ReturnType<typeof setCurrentPage_AC>
    | ReturnType<typeof setTotalUsersCount_AC>
    | ReturnType<typeof toggleIsFetching_AC>


let initialState: UsersInitialStateType = {
    users: [],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
};

export const usersReducer = (state: UsersInitialStateType = initialState,
                             action: UsersAcType): UsersInitialStateType => {
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
            return {...state, users: [...action.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USER_COUNT:
            return {...state, totalUsersCount: action.totalCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
};

export const follow_AC = (userID: number) => {
    return {type: FOLLOW, userID} as const
}
export const unfollow_AС = (userID: number) => {
    return {type: UNFOLLOW, userID} as const
}
export const setUsers_AC = (users: Array<UserType>) => {
    return {type: SET_USERS, users} as const
}
export const setCurrentPage_AC = (currentPage: number) => {
    return {type: SET_CURRENT_PAGE, currentPage} as const
}
export const setTotalUsersCount_AC = (totalCount: number) => {
    return {type: SET_TOTAL_USER_COUNT, totalCount} as const
}
export const toggleIsFetching_AC = (isFetching: boolean) => {
    return {type: TOGGLE_IS_FETCHING, isFetching} as const
}

export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET-USERS'
export const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
export const SET_TOTAL_USER_COUNT = 'SET-TOTAL-USER-COUNT'
export const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'

