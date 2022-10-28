import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {addMessageActionCreator, GeneralStoreType, updateMessageActionCreator} from "../../redux/state";
import {Dialogs} from "./Dialogs";

type PropsMessagesPageType = {
    store: GeneralStoreType
}

export const DialogsContainer = (props: PropsMessagesPageType) => {

    let state = props.store.getState().dialogsPage

    const addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }
    const onMessageChange = (text: string) => {
        props.store.dispatch(updateMessageActionCreator(text))
    }

    return <Dialogs dialogsPage={state}
                    addMessage={addMessage}
                    onMessageChange={onMessageChange}/>
};
