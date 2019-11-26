import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getProfileInfo, getStatus, updateStatus} from './../../redux/profielReducer';
// import withAuthRedirect from '../../hoc/authRedirect';
import {compose} from 'redux';

class ProfileContainer extends React.Component {
  
  componentDidMount() {
    let userID = this.props.match.params.userID
    this.props.getProfileInfo(userID);
    this.props.getStatus(userID);
}
  
  render () {
      return <Profile {...this.props} userInfo = {this.props.userInfo} />
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.postsData.userInfo,
    status: state.postsData.status
  }
}

export default compose (connect(mapStateToProps, {getProfileInfo, getStatus, updateStatus}), withRouter) (ProfileContainer);

// , withAuthRedirect