import {usersAPI} from "../api/api";


let initialState: UsersInitialStateType = {
    users: [],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

export const usersReducer = (state: UsersInitialStateType = initialState,
                             action: UsersAcType): UsersInitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => u.id === action.userID
                    ? {...u, followed: true}
                    : u
                )
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => u.id === action.userID
                    ? {...u, followed: false}
                    : u
                )
            }

        case SET_USERS:
            return {...state, users: [...action.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USER_COUNT:
            return {...state, totalUsersCount: action.totalCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
};

//---- Action Creator ----
export const followSuccessAC = (userID: number) => {
    return {type: FOLLOW, userID} as const
}
export const unfollowSuccessAC = (userID: number) => {
    return {type: UNFOLLOW, userID} as const
}
export const setUsersAC = (users: Array<UserType>) => {
    return {type: SET_USERS, users} as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {type: SET_CURRENT_PAGE, currentPage} as const
}
export const setTotalUsersCountAC = (totalCount: number) => {
    return {type: SET_TOTAL_USER_COUNT, totalCount} as const
}
export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {type: TOGGLE_IS_FETCHING, isFetching} as const
}
export const toggleIsFollowingProgressAC = (isFetching: boolean, userId: number) => {
    return {type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId} as const
}

//---- thunks -----
export const requestUsersTC = (page: number, pageSize: number) => {
    return (dispatch: any) => {
        dispatch(toggleIsFetchingAC(true))
        dispatch(setCurrentPageAC(page))
        usersAPI.requestUsers(page, pageSize)
            .then(data => {
                dispatch(setUsersAC(data.items))
                dispatch(toggleIsFetchingAC(false))
                dispatch(setTotalUsersCountAC(data.totalCount))
            })
            .catch((err) => console.log(err.messages))
    }
}

export const followTC = (userID: number) => {
    return (dispatch: any) => {
        dispatch(toggleIsFollowingProgressAC(true, userID))
        usersAPI.follow(userID)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowSuccessAC(userID))
                }
                dispatch(toggleIsFollowingProgressAC(false, userID))
            })
    }
}
export const unfollowTC = (userID: number) => {
    return (dispatch: any) => {
        dispatch(toggleIsFollowingProgressAC(true, userID))
        usersAPI.unfollow(userID)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followSuccessAC(userID))
                }
                dispatch(toggleIsFollowingProgressAC(false, userID))
            })
    }
}

//types
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
    followingInProgress: Array<number>
}
export type UsersAcType = ReturnType<typeof followSuccessAC>
    | ReturnType<typeof unfollowSuccessAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>
    | ReturnType<typeof toggleIsFetchingAC>
    | ReturnType<typeof toggleIsFollowingProgressAC>

//const
export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET-USERS'
export const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
export const SET_TOTAL_USER_COUNT = 'SET-TOTAL-USER-COUNT'
export const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
export const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'