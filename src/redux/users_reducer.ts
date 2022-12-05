import {usersAPI} from "../api/api";

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
export type UsersAcType = ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleIsFollowingProgress>

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
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
};
export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET-USERS'
export const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
export const SET_TOTAL_USER_COUNT = 'SET-TOTAL-USER-COUNT'
export const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
export const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'
//---- Action Creator ----
export const followSuccess = (userID: number) => {
    return {type: FOLLOW, userID} as const
}
export const unfollowSuccess = (userID: number) => {
    return {type: UNFOLLOW, userID} as const
}
export const setUsers = (users: Array<UserType>) => {
    return {type: SET_USERS, users} as const
}
export const setCurrentPage = (currentPage: number) => {
    return {type: SET_CURRENT_PAGE, currentPage} as const
}
export const setTotalUsersCount = (totalCount: number) => {
    return {type: SET_TOTAL_USER_COUNT, totalCount} as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {type: TOGGLE_IS_FETCHING, isFetching} as const
}
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number) => {
    return {type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId} as const
}

//---- thunks -----
export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: any) => {
        dispatch(toggleIsFetching(true))

        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            })
    }
}

export const follow = (userID: number) => {
    return (dispatch: any) => {
        dispatch(toggleIsFollowingProgress(true, userID))

        usersAPI.follow(userID)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowSuccess(userID))
                }
                dispatch(toggleIsFollowingProgress(false, userID))
            })
    }
}
export const unfollow = (userID: number) => {
    return (dispatch: any) => {
        dispatch(toggleIsFollowingProgress(true, userID))

        usersAPI.unfollow(userID)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followSuccess(userID))
                }
                dispatch(toggleIsFollowingProgress(false, userID))
            })
    }
}



