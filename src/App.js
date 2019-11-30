import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { Route, withRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {initialize} from './redux/appReducer'

class App extends React.Component {

  componentDidMount() {
    this.props.initialize();
}

  render() {
    if(!this.props.initialized) {
      return <div>LOADING</div>
    }
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <div className='wrapper_container'>
          <Navbar />
          <div className = 'wrapper-content'>
          <Route exact path='/' render={() => <Login />} />  
          <Route path='/profile/:userID?' render={() => <ProfileContainer />} />
          <Route path='/dialogs/:userID?' render={() => <DialogsContainer />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/settings' render={() => <Settings />} />
          <Route path='/login' render={() => <Login />} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {initialized: state.app.initialized}
}

export default compose(withRouter, connect(mapStateToProps, { initialize })) (App);
