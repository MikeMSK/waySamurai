import React from "react";
import s from './FormsControls.module.css'



export const Textarea = (props: any) => {
    return (
        <FormControl {...props} element ={textarea}/>
    )
}

export const Input = (props: any) => {
    return (
        <FormControl {...props} element ={input}/>
    )
}


export const FormControl = ({input, meta, child, element, ...props}: any) => {
    const hasError = meta.error && meta.touched
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                <textarea {...input}{...props}/>
                <input {...input}{...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}