import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const mapDispatchToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default (Component) => {
    class RedirectComponent extends React.Component {
    
        render () {
            
            if(this.props.isAuth) {return <Redirect to = {'/profile'} />}
            return <Component {...this.props} />
        }
    }

    return connect (mapDispatchToProps, null) (RedirectComponent);
}

