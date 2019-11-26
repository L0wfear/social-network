import React from 'react';
import styles from '../../Login/Login.module.css';

export const Input = ({input, meta, ...props}) => {
    return <div>
    <input {...input} {...props} className = {styles.loginInput + ' ' + (meta.touched && meta.error && styles.error)} />
    {meta.touched && meta.error && <span className = {styles.errorSpan}>{meta.error}</span>}
    </div> 
}
