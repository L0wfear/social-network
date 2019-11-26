import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img alt='someAlt' src='https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg' />
      <div className={classes.message}>
        {props.message}
      </div>
      <div className={classes.likes}>
        <span>like {props.likeCount}</span> 
      </div>
    </div>
  )

}

export default Post;