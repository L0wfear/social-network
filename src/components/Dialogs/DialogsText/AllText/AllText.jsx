import React from 'react';
import classes from './../../../Dialogs/Dialogs.module.css'

const AllText = (props) => {
    return (
        <div className = {classes.text}>{props.text}</div>
    )
}



export default AllText;

