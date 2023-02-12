import {AppStateType} from "./redux-store";
import {createSelector} from "reselect";


//example selector
export const getBaseUsers = (state: AppStateType) => {
    return state.usersPage.users
}
export const getUsersS = createSelector(getBaseUsers, (users) => {
    return users.filter(u => true)
})
// export const getUsersSS = createSelector(getUsers,getPageSize, (users,page) => {
//     return users
// })

export const getPageSize = (state: AppStateType) => state.usersPage.pageSize
export const getIsFetching = (state: AppStateType) => state.usersPage.isFetching
export const getCurrentPage = (state: AppStateType) => state.usersPage.currentPage
export const getTotalUsersCount = (state: AppStateType) => state.usersPage.totalUsersCount
export const getFollowingInProgress = (state: AppStateType) => state.usersPage.followingInProgress

