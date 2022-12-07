import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsPropsType} from "./DialogsContainer";
import {Navigate} from "react-router-dom";


export const Dialogs = (props: DialogsPropsType) => {

    const onClickHandler = () => {
        props.addMessage()
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onMessageChange(e.currentTarget.value)
    }

    if (!props.isAuth) {
        return <Navigate replace to={'/login'}/>
    }

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id}
                                                                         id={d.id}
                                                                         name={d.name}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id}
                                                                        id={m.id}
                                                                        message={m.message}/>)
    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={s.messages}>
            <div> {messagesElements}</div>
            <div>
                <div>
                    <textarea placeholder={'enter your message, man)'}
                              onChange={onChangeHandler}
                              value={props.dialogsPage.newMessageText}/>
                </div>
                <div>
                    <button onClick={onClickHandler}>add post</button>
                </div>
            </div>
        </div>
    </div>
};


//------------ref--------
// let text = newPostElement.current.value
// let newPostElement = React.createRef();
// ref = {newPostElement}