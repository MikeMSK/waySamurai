import {Dialogs} from "./Dialogs";
import {addMessageAC, DialogsAcType, DialogsInitialStateType, updateMessageAC} from "../../redux/dialogs_reducer";
import {connect} from "react-redux";
import {Dispatch} from "react";
import {AppStateType} from "../../redux/redux-store";


type MapStateToPropsType = {
    dialogsPage: DialogsInitialStateType
}
type MapDispatchToPropsType = {
    addMessage: () => void
    onMessageChange: (text: string) => void
}
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {//-----any
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch<DialogsAcType>): MapDispatchToPropsType => {
    return {
        addMessage: () => dispatch(addMessageAC()),
        onMessageChange: (text: string) => dispatch(updateMessageAC(text))
    }
}


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
