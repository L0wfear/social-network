import Users from './Users';
import {getPageSizeSelector, getTotalCountSelector, getCurrentPageSelector, getIsFollowingInProgressSelector, getUsersSelector} from '../../redux/usersSelectors';
import { connect } from 'react-redux';
import {follow, setCurrentPage, unfollow, getUsers} from '../../redux/usersReducer';
import React from 'react';

class setUsersContainer extends React.Component {

    componentDidMount() {
         this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    
    onPageChanged = (currentPage) => {
        this.props.setCurrentPage(currentPage);
        this.props.getUsers(currentPage, this.props.pageSize);
    }

    render() {
         return <Users {...this.props}
                       follow    = {this.props.follow}
                       unfollow  = {this.props.unfollow}
                       onPageChanged = {this.onPageChanged}
         />
     };
 }

const mapStateToProps = (state) => {
    return { pageSize: getPageSizeSelector(state),
             totalCount: getTotalCountSelector(state), 
             currentPage: getCurrentPageSelector(state),
             users: getUsersSelector(state),     
             isFollowingInProgress: getIsFollowingInProgressSelector(state) 
    };
}

const UsersContainer = connect(mapStateToProps, { follow, setCurrentPage, unfollow, getUsers })(setUsersContainer);

export default UsersContainer;

