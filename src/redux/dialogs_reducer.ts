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
}

export const dialogsReducer = (state: DialogsInitialStateType = initialState,
                               action: DialogsAcType): DialogsInitialStateType => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {...state, messages: [...state.messages, {id: "10", message: action.newMessage}]}

        default:
            return state
    }
};

//action creator
export const addMessageAC = (newMessage: string) => {
    return {type: ADD_MESSAGE, newMessage} as const
}

//types
export type MessageType = {
    id: string
    message: string
}
export type DialogType = {
    id: string
    name: string
}
export type DialogsInitialStateType = typeof initialState
export type DialogsAcType =
    | ReturnType<typeof addMessageAC>
//const
const ADD_MESSAGE = 'ADD-MESSAGE';