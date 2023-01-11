import {Dialogs} from "./Dialogs";
import {addMessageAC, DialogsAcType, DialogsInitialStateType, updateMessageAC} from "../../redux/dialogs_reducer";
import {connect} from "react-redux";
import React, {Dispatch} from "react";
import {AppStateType} from "../../redux/redux-store";
import {witAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type MapStateToPropsType = {
    dialogsPage: DialogsInitialStateType
    isAuth: any
} //-------any
type MapDispatchToPropsType = {
    addMessage: () => void
    onMessageChange: (text: string) => void
}
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType


const mapStateToProps = (state: AppStateType) => ({
    dialogsPage: state.dialogsPage
})
const mapDispatchToProps = (dispatch: Dispatch<DialogsAcType>): MapDispatchToPropsType => {
    return {
        addMessage: () => dispatch(addMessageAC()),
        onMessageChange: (text: string) => dispatch(updateMessageAC(text))
    }
}

export const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    witAuthRedirect
)(Dialogs)