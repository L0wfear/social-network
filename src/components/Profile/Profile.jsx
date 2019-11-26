import React from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
//import ProfileStatus from './Status/ProfileStatus';
import ProfileStatusWithHooks from './Status/ProfileStatusWithHooks';

const Profile = (props) => {

    return (
      <div className={classes.content}>
      <div>
        {/* <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' /> */}
      </div>
      <div>
        <img src= {props.userInfo && props.userInfo.photos.large} alt=""/>
      </div>
      <ProfileStatusWithHooks {...props} />
      <MyPostsContainer />
    </div>
  )
}

export default Profile;
