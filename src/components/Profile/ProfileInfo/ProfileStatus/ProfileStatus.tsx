import React from 'react';
import s from './../ProfileInfo.module.css'

type ProfileStatusType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        editMode: false
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
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <div>
                        <span onDoubleClick={this.activateEditMode}>
                            {this.props.status}
                            </span>
                    </div>
                    : <div>
                        <input onBlur={this.deactivateEditMode}
                               autoFocus={true}
                               value={this.props.status}/>
                    </div>
                }

            </div>
        );
    }


}
;
