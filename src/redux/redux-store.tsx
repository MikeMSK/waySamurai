import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile_reducer";
import {dialogsReducer} from "./dialogs_reducer";
import {sidebarReducer} from "./sidebar_reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBarPage: sidebarReducer
});

export let store = createStore(reducers);

console.log(store)