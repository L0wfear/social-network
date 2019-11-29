import React from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
//import ProfileStatus from './Status/ProfileStatus';
import ProfileStatusWithHooks from './Status/ProfileStatusWithHooks';
import img from '../../img/chigurh.jpg';

const Profile = (props) => {
    
    return (
      <div className={classes.content}>
      <div>
        <img src= { props.userInfo && (props.userInfo.photos.large || img)} alt=""/>
      </div>
      <ProfileStatusWithHooks {...props} />
      <MyPostsContainer />
    </div>
  )
}

export default Profile;
