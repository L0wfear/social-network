import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postEl = props.postsData.posts.map(p => <Post id = {p.id} key = {p.id} message = {p.text} likeCount ={p.likesCount} />)
  
  let onTextChange = (e) => {
    let body = e.target.value;
    props.updateProfileText(body);
  }

  let addPost = () => {
    let text = props.profileText;
    props.addPost(text);
  }

  return (
    <div className ={classes.posts}>
      My posts
      <div>
        <textarea value = {props.profileText}
                  placeholder = 'Enter text'
                  onChange = {onTextChange} ></textarea>
        <button onClick = {addPost}>Add post</button>
        
      </div>
      <div className = {classes.posts}>
        {postEl}
      </div>
    </div>
  )
}

export default MyPosts;