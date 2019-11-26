import React from 'react';
import classes from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <NavLink to={"/dialogs/" + props.id} className={classes.dialogs}>
            <div className={classes.message}>
                <img className={classes.photo} src={props.imgSrc} alt={props.imgAlt} />
                <div>
                    <div className={classes.name}>{props.name}</div>
                    <div className={classes.text}>{props.text[0]}</div>
                </div>
            </div>
        </NavLink>
    )
}



export default DialogItem;

