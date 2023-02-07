import React from 'react';
import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

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

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength50]}
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