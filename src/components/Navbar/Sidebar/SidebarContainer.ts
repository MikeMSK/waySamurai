import {Sidebar} from "./Sidebar";
import {addAlertAC, SidebarAcType, SideBarInitialStateType} from "../../../redux/sidebar_reducer";
import {connect} from "react-redux";
import {Dispatch} from "react";
import {AppStateType} from "../../../redux/redux-store";


type MapStateToPropsType = {
    sidebarPage: SideBarInitialStateType
}
type MapDispatchToPropsType = {
    addAlert: () => void
}
export type SidebarPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        sidebarPage: state.sideBarPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch<SidebarAcType>): MapDispatchToPropsType => {
    return {
        addAlert: () => dispatch(addAlertAC()),
    }
}
//------react-redux------
export const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);