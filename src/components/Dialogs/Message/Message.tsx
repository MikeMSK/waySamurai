import React from "react";
import s from '../Dialogs.module.css'

export type PropsMessageType = {
    id: string
    message: string
}
export const Message = (props: PropsMessageType) => {
    return <div className={s.message}>
        {props.message}
    </div>
};