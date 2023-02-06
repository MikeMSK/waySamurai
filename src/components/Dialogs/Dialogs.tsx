import React from 'react';
import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, reduxForm} from "redux-form";


export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id}
                                                                         id={d.id}
                                                                         name={d.name}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id}
                                                                        id={m.id}
                                                                        message={m.message}/>)

    const addNewMessage = (values: any) => {
        props.addMessage(values.newMassageBody)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div> {messagesElements}</div>
                <div>
                    <AddMessageFormRedux onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    )
};

const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'}
                       name={'newMassageBody'}
                       placeholder={'Enter your message'}/>
            </div>
            <div>
                <button>add post</button>
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);