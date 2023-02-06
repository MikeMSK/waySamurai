import {addPostAC, profileReducer} from "./profile_reducer";
import {addMessageAC, dialogsReducer} from "./dialogs_reducer";
import {addAlertAC, sidebarReducer} from "./sidebar_reducer";
import {followSuccessAC, setUsers, unfollowSuccessAC} from "./users_reducer";
//------ BASE TYPE ---------------//
// export type PostType = {
//     id: string
//     message: string
//     likesCount: number
// }
// type MessageType = {
//     id: string
//     message: string
// }
//  type DialogType = {
//     id: string
//     name: string
// }
// export type PostsType = {
//     posts: Array<PostType>
//     newPostText: string
// }
// export type MessagesPageType = {
//     dialogs: Array<DialogType>
//     messages: Array<MessageType>
//     newMessageText: string
// }
// export type SidebarType = {
//     id: string
//     name: string
// }
// export type StateType = {
//     profilePage: PostsType
//     dialogsPage: MessagesPageType
//     sidebar: Array<SidebarType>
// }
// type UserType = {
//     id: number
//     photoUrl: string
//     followed: boolean
//     fullName: string
//     status: string
//     location: { country: string, city: string }
// }
// type UsersListType = {
//     users: Array<UserType>
// }


// //----- StoreType -------//
// // export type GeneralStoreType = {
// //     _state: StateType
// //     _callSubscriber: (state: StateType) => void
// //     getState: () => StateType
// //     subscribe: (observer: (state: StateType) => void) => void
// //     dispatch: (action: ActionType) => void
// // }
// //----- store (ООП обьект) -------//
// export let store: GeneralStoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: "1", message: "Hi, how are you?", likesCount: 5},
//                 {id: "2", message: "I`am fine, thanks you", likesCount: 10},
//                 {id: "3", message: "Very good!", likesCount: 15},
//             ],
//             newPostText: ""
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: "1", name: "Misha"},
//                 {id: "2", name: "Igor"},
//                 {id: "3", name: "Piter"},
//                 {id: "4", name: "Anton"},
//                 {id: "5", name: "Kolya"},
//             ],
//             messages: [
//                 {id: "1", message: "Hi!"},
//                 {id: "2", message: "Good morning!"},
//                 {id: "3", message: "How do you do?"},
//                 {id: "4", message: "I am fine, thank you and you?"},
//                 {id: "5", message: "I`m ok"},
//             ],
//             newMessageText: ""
//         },
//         sidebar: [
//             {id: "1", name: "Misha"},
//             {id: "3", name: "Piter"},
//             {id: "4", name: "Olya"}
//         ],
//     },
//     _callSubscriber() {
//         console.log('state is changed')
//     },
//     getState() {
//         return this._state
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer
//     },
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action)
//         this._callSubscriber(this._state)
//     }
// };
