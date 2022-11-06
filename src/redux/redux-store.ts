import {combineReducers, createStore} from "redux";
import {addPostActionCreator, profileReducer, updatePostActionCreator} from "./profile_reducer";
import {addMessageAC, dialogsReducer, updateMessageAC} from "./dialogs_reducer";
import {addAlertAC, sidebarReducer} from "./sidebar_reducer";
import {followAC, setUsersAC, unfollowAС, usersReducer} from "./users_reducer";

export type AppStateType = ReturnType<typeof rootReducer>

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBarPage: sidebarReducer,
    usersPage: usersReducer
});

export let store = createStore(rootReducer);

