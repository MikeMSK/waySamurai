export type MessageType = {
    id: string
    message: string
}
export type DialogType = {
    id: string
    name: string
}
export type DialogsInitialStateType = typeof initialState
export type DialogsAcType = ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateMessageAC>


const initialState = {
    dialogs: [
        {id: "1", name: "Misha"},
        {id: "2", name: "Igor"},
        {id: "3", name: "Piter"},
        {id: "4", name: "Anton"},
        {id: "5", name: "Kolya"},
    ] as Array<DialogType>,
    messages: [
        {id: "1", message: "Hi!"},
        {id: "2", message: "Good morning!"},
        {id: "3", message: "How do you do?"},
        {id: "4", message: "I am fine, thank you and you?"},
        {id: "5", message: "I`m ok"},
    ] as Array<MessageType>,
    newMessageText: ""
}

export const dialogsReducer = (state: DialogsInitialStateType = initialState,
                               action: DialogsAcType): DialogsInitialStateType => {

    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: "10", message: state.newMessageText}],
                newMessageText: ""
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }
        default:
            return state
    }
};

export const addMessageAC = () => {
    return {type: ADD_MESSAGE} as const
}
export const updateMessageAC = (text: string) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, newText: text} as const
}

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';