import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return <header className={classes.header}>
        <div className={classes.logo}></div>
        <div>
            <NavLink to={'/login'} className={classes.loginBtn}>{props.login || 'LOGIN'}</NavLink>
            {props.isAuth && <NavLink to={'/profile'} onClick = {props.logout} className={classes.logoutBtn}>LOGOUT</NavLink>}
        </div>
    </header>
}

export default Header;