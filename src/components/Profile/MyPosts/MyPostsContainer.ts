import {MyPosts} from "./MyPosts";
import {addPostAC, ProfileAcType} from "../../../redux/profile_reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "react";


const mapStateToProps = (state: AppStateType) => {
    return {
        profilePage: state.profilePage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch<ProfileAcType>): MapDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => dispatch(addPostAC(newPostText)),
    }
}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

// --- type
type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchToPropsType = {
    addPost: (newPostText: string) => void
}
export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType