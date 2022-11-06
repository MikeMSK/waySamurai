import {Sidebar} from "./Sidebar";
import {addAlertAC, SidebarAcType} from "../../../redux/sidebar_reducer";
import {connect} from "react-redux";

import {AppStateType} from "../../../redux/redux-store";


const mapStateToProps = (state: AppStateType) => {
    return {
        sidebar: state.sideBarPage
    }
}
const mapDispatchToProps = (dispatch: (action: SidebarAcType) => void) => {
    return {
        addAlert: () => dispatch(addAlertAC()),
    }
}
//------react-redux------
export const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);