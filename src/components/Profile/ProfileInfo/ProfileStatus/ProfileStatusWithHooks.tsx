import React, {ChangeEvent, useState} from 'react';
import s from './../ProfileInfo.module.css'
import {threadId} from "worker_threads";


type ProfileStatusType = {
    status: string
    updateStatus: (value: string) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusType) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState("")

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
        setStatus(event.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>
                        {props.status || 'no status'}
                    </span>
                </div>
            }
            {editMode && <div>
                <input autoFocus={true}
                       value={status}
                       onBlur={deactivateEditMode}
                       onChange={(event) => onStatusChange(event)}
                />
            </div>
            }
        </div>
    )
}

