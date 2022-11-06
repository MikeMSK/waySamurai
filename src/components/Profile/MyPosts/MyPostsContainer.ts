import {MyPosts} from "./MyPosts";
import {
    addPostActionCreator, ProfileAcType, ProfileInitialStateType, updatePostActionCreator
} from "../../../redux/profile_reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "react";


type MapStateToPropsType = {
    profilePage: ProfileInitialStateType

}
type MapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
}
export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch: Dispatch<ProfileAcType>): MapDispatchToPropsType => {
    return {
        addPost: () => dispatch(addPostActionCreator()),
        updateNewPostText: (text: string) => dispatch(updatePostActionCreator(text))
    }
}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
