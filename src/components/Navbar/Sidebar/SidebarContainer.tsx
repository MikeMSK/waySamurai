import React from 'react';
import {Sidebar} from "./Sidebar";
import {addAlertActionCreator} from "../../../redux/sidebar_reducer";
import {connect} from "react-redux";
import {ActionType, StateType} from "../../../redux/store";


const mapStateToProps = (state: StateType) => {
    return {
        sidebar: state.sidebar
    }
}
const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        addAlert: () => dispatch(addAlertActionCreator()),
    }
}
//------react-redux------
export const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);