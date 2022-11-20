import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile_reducer";
import {dialogsReducer} from "./dialogs_reducer";
import {sidebarReducer} from "./sidebar_reducer";
import {usersReducer} from "./users_reducer";


export type AppStateType = ReturnType<typeof rootReducer>

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBarPage: sidebarReducer,
    usersPage: usersReducer
});

export let store = createStore(rootReducer);


// @ts-ignore
window.store = store