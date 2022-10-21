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

export let store = {
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
    getState() {
        return this._state
    },

    addPost() {
        this._state.profilePage.posts.push({id: "10", message: this._state.profilePage.newPostText, likesCount: 0});
        this._state.profilePage.newPostText = " "
        this._callSubsscriber(this._state)
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubsscriber(this._state)
    },
    addMessage() {
        this._state.dialogsPage.messages.push({id: "10", message: this._state.dialogsPage.newMessageText});
        this._state.dialogsPage.newMessageText = " "
        this._callSubsscriber(this._state)
    },
    updateNewMessageText(newText: string) {
        this._state.dialogsPage.newMessageText = newText
        this._callSubsscriber(this._state)
    },

    _callSubsscriber(state: StateType) {
        alert("state is changed")
    },
    subscribe(observer: any) {
        this._callSubsscriber = observer
    }

};



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