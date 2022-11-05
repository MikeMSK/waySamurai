import React from 'react';
import {Dialogs} from "./Dialogs";
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogs_reducer";
import {connect} from "react-redux";
import {ActionType, StateType} from "../../redux/store";

const mapStateToProps = (state: StateType) => {//-----any
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        addMessage: () => dispatch(addMessageActionCreator()),
        onMessageChange: (text: string) => dispatch(updateMessageActionCreator(text))
    }
}
//------react-redux------
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
