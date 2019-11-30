import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return <header className={classes.header}>
        <div className={classes.header_content}>
            <div className={classes.logo}></div>
            <div className={classes.loginLogoutBtn}>
                <div className={classes.loginDiv} ><NavLink to={'/login'} className={classes.loginBtn}>{props.login || 'LOGIN'}</NavLink></div>
                <div>{props.isAuth && <NavLink to={'/profile'} onClick={props.logout} className={classes.logoutBtn}>LOGOUT</NavLink>}</div>
            </div>
        </div>

    </header>
}

export default Header;