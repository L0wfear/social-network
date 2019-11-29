import React, {PureComponent} from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getProfileInfo, getStatus, updateStatus} from './../../redux/profielReducer';
// import withAuthRedirect from '../../hoc/authRedirect';
import {compose} from 'redux';
import preloader from '../../img/preloader.svg'

class ProfileContainer extends PureComponent {

setUserInfo() {
  let userID = this.props.isAuth ? (this.props.match.params.userID || this.props.userID) : (this.props.match.params.userID || 2);
  if(this.props.isAuth !== undefined){
  this.props.getProfileInfo(userID);
  this.props.getStatus(userID);}
}

componentDidMount() {
  this.setUserInfo();
}

componentDidUpdate (nextProps) {
  if(!this.props.userInfo){
  this.setUserInfo();}
}

  render () {
      return <>
      {console.log('io')}
      {!this.props.isFetching ? <img src =  {preloader} alt = 'preloader' /> : <Profile {...this.props} userInfo = {this.props.userInfo} />}
      
      </>
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.postsData.userInfo,
    status: state.postsData.status,
    isAuth: state.auth.isAuth,
    userID: state.auth.id,
    isFetching: state.postsData.isFetching
  }
}

export default compose (connect(mapStateToProps, {getProfileInfo, getStatus, updateStatus}), withRouter) (ProfileContainer);

// , withAuthRedirect