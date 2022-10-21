import React from "react";
import s from '../Dialogs.module.css'

export type PropsMessageType = {
    id: string
    message: string
}
export const Message = (props: PropsMessageType) => {

    let haystack = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];

    const x = (haystack: Array<any>) => {


    }

    // function findNeedle(haystack: any) {
    //     let result = ''
    //     haystack.findIndex((el: any,index) => {
    //         if (el === 'needle') {
    //             result = 'found the needle at position' + el.
    //         }
    //     })
    //     return result
    // }


    return <div className={s.message}>{props.message}</div>
};