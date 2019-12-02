import React from 'react';
import styles from '../../Login/Login.module.css';

export const Input = ({input, meta, ...props}) => {
    return <div className={styles.validate_input + ' ' + (meta.touched && meta.error && styles.error)} data-validate = {meta.error}>
    <input {...input} {...props} className = {styles.loginInput} />
    </div> 
}
