import {Dialogs} from "./Dialogs";
import {addMessageAC, DialogsAcType} from "../../redux/dialogs_reducer";
import {connect} from "react-redux";
import React, {Dispatch} from "react";
import {AppStateType} from "../../redux/redux-store";
import {witAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


const mapStateToProps = (state: AppStateType) => ({
    dialogsPage: state.dialogsPage
})
const mapDispatchToProps = (dispatch: Dispatch<DialogsAcType>): MapDispatchToPropsType => {
    return {
        addMessage: (newMessage: string) => dispatch(addMessageAC(newMessage))
    }
}

// --- compose --- connect --- HOC
export const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    witAuthRedirect
)(Dialogs)

// --- type
type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchToPropsType = {
    addMessage: (newMessage: string) => void
}
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType