//------ BASE TYPE ---------------//
export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type MessageType = {
    id: string
    message: string
}
export type DialogType = {
    id: string
    name: string
}
export type PostsType = {
    posts: Array<PostType>
    newPostText: string
}
export type MessagesPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}
export type SidebarType = {
    id: string
    name: string
}
export type StateType = {
    profilePage: PostsType
    dialogsPage: MessagesPageType
    sidebar: Array<SidebarType>
}
//----- TYPE ACTION CREATOR -------//
export type ActionType = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updatePostActionCreator>
    | ReturnType<typeof addMessageActionCreator>
    | ReturnType<typeof updateMessageActionCreator>

export type GeneralStoreType = {
    _state: StateType
    _callSubscriber: (state: StateType) => void
    getState: () => StateType
    subscribe: (observer: (state: StateType) => void) => void
    dispatch: (action: ActionType) => void
}

export let store: GeneralStoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: "1", message: "Hi, how are you?", likesCount: 5},
                {id: "2", message: "I`am fine, thanks you", likesCount: 10},
                {id: "3", message: "Very good!", likesCount: 15},
            ],
            newPostText: ""
        },
        dialogsPage: {
            dialogs: [
                {id: "1", name: "Misha"},
                {id: "2", name: "Igor"},
                {id: "3", name: "Piter"},
                {id: "4", name: "Anton"},
                {id: "5", name: "Kolya"},
            ],
            messages: [
                {id: "1", message: "Hi!"},
                {id: "2", message: "Good morning!"},
                {id: "3", message: "How do you do?"},
                {id: "4", message: "I am fine, thank you and you?"},
                {id: "5", message: "I`m ok"},
            ],
            newMessageText: ""
        },
        sidebar: [
            {id: "1", name: "Misha"},
            {id: "3", name: "Piter"},
            {id: "4", name: "Olya"}
        ],
    },
    _callSubscriber(state: StateType) {
        console.log('state is changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            this._state.profilePage.posts.push({id: "10", message: this._state.profilePage.newPostText, likesCount: 0});
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)

        } else if (action.type === ADD_MESSAGE) {
            this._state.dialogsPage.messages.push({id: "10", message: this._state.dialogsPage.newMessageText});
            this._state.dialogsPage.newMessageText = ' '
            this._callSubscriber(this._state)

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)

        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText
            this._callSubscriber(this._state)
        }
    }
};
//-----ACTION_CREATOR-------//
export const addPostActionCreator = () => {
    return {type: ADD_POST} as const
}
export const updatePostActionCreator = (text: string) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text} as const
}
export const addMessageActionCreator = () => {
    return {type: ADD_MESSAGE} as const
}
export const updateMessageActionCreator = (text: string) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, newText: text} as const
}
//-----CONSTANTS------------//
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


//старый state!!!!
// export let state: StateType = {
//     profilePage: {
//         posts: [
//             {id: "1", message: "Hi, how are you?", likesCount: 5},
//             {id: "2", message: "I`am fine, thanks you", likesCount: 10},
//             {id: "3", message: "Very good!", likesCount: 15},
//         ],
//         newPostText: ""
//     },
//     dialogsPage: {
//         dialogs: [
//             {id: "1", name: "Misha"},
//             {id: "2", name: "Igor"},
//             {id: "3", name: "Piter"},
//             {id: "4", name: "Anton"},
//             {id: "5", name: "Kolya"},
//         ],
//         messages: [
//             {id: "1", message: "Hi!"},
//             {id: "2", message: "Good morning!"},
//             {id: "3", message: "How do you do?"},
//             {id: "4", message: "I am fine, thank you and you?"},
//             {id: "5", message: "I`m ok"},
//         ],
//         newMessageText: ""
//     },
//     sidebar: [
//         {id: "1", name: "Misha"},
//         {id: "3", name: "Piter"},
//         {id: "4", name: "Olya"}
//     ],
// }
//
//
// export const addPost = () => {
//     state.profilePage.posts.push({id: "10", message: state.profilePage.newPostText, likesCount: 0});
//     state.profilePage.newPostText = " "
//     rerenderEntierTree(state)
// }
// export const updateNewPostText = (newText: string) => {
//     state.profilePage.newPostText = newText
//     rerenderEntierTree(state)
// }
// export const addMessage = () => {
//     state.dialogsPage.messages.push({id: "10", message: state.dialogsPage.newMessageText});
//     state.dialogsPage.newMessageText = " "
//     rerenderEntierTree(state)
// }
// export const updateNewMessageText = (newText: string) => {
//     state.dialogsPage.newMessageText = newText
//     rerenderEntierTree(state)
// }
//
// let rerenderEntierTree = (state: StateType) => {
//     alert("state is changed")
// }
// export const subscribe = (observer: any) => {
//     rerenderEntierTree = observer
// }