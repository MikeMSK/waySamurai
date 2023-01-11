import React, {ChangeEvent} from 'react';
import s from './../ProfileInfo.module.css'


type ProfileStatusType = {
    status: string
    updateStatus: (value: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: event.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <div>
                        <span onDoubleClick={this.activateEditMode}>
                            {this.props.status || 'no status'}
                            </span>
                    </div>
                    : <div>
                        <input onBlur={this.deactivateEditMode}
                               autoFocus={true}
                               value={this.state.status}
                               onChange={this.onStatusChange}
                        />
                    </div>
                }

            </div>
        );
    }


}
;
