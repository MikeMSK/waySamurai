import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile_reducer";
import {dialogsReducer} from "./dialogs_reducer";
import {sidebarReducer} from "./sidebar_reducer";
import {usersReducer} from "./users_reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'

export type AppStateType = ReturnType<typeof rootReducer>

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBarPage: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));


// @ts-ignore
window.store = store