import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from '../redux/loginReducer';

const mapDispatchToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default (Component) => {
    class RedirectComponent extends React.Component {
    
        render () {
            
            if(!this.props.isAuth) {return <Redirect to = {'/login'} />}
            return <Component {...this.props} />
        }
    }

    return connect (mapDispatchToProps, {login}) (RedirectComponent);
}

