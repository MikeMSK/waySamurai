import React from 'react';
import {addMessageActionCreator, GeneralStoreType, updateMessageActionCreator} from "../../redux/state";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";

export const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store: GeneralStoreType) => {
                    let state = store.getState().dialogsPage

                    const addMessage = () => {
                        store.dispatch(addMessageActionCreator())
                    }
                    const onMessageChange = (text: string) => {
                        store.dispatch(updateMessageActionCreator(text))
                    }
                    return <Dialogs dialogsPage={state}
                                    addMessage={addMessage}
                                    onMessageChange={onMessageChange}/>
                }
            }
        </StoreContext.Consumer>
    )
};
