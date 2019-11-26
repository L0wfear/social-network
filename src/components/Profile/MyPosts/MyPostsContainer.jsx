// import React from 'react';
import { addPostCreator } from '../../../redux/profielReducer';
import MyPosts from './MyPosts';
import { updateProfileTextCreator } from '../../../redux/profileTextReducer';
import {connect} from 'react-redux';

// const MyPostsContainer = (props) => {
//   let state = props.store.getState();

//   let addPost = (text) => {
//     props.store.dispatch(addPostCreator(text));
//     state.profileText = '';
//   }

//   let updateProfileText = (body) => {
//     props.store.dispatch(updateProfileTextCreator(body));
//   }
//   return (
//     <MyPosts addPost = {addPost} updateProfileText = {updateProfileText} 
//              postsData = {state.postsData} profileText = {state.profileText} />
//   )
// }

let mapStateToProps = (state) => {
  return {
    postsData: state.postsData,
    profileText: state.profileText
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateProfileText: (body) => {
      dispatch(updateProfileTextCreator(body));
    },
    addPost: (text) => {
      dispatch(addPostCreator(text));
      text = '';
      dispatch(updateProfileTextCreator(text));
    }
  }
};

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;