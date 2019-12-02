import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../Commons/FormsControl/FormsControl';
import { required } from '../../utilits/validator';
import { connect } from 'react-redux';
import { login, logout } from '../../redux/loginReducer';
import withAuthRedirect from '../../hoc/authRedirect';
import classes from './Login.module.css';
import img from '../../img/img-01.png'

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.login, formData.password, formData.rememberMe);
    }
    return <div className={classes.login_page}>
        <div className={classes.login_form_container} >
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
        <div className={classes.login_page_img}>
            <img src={img} alt="some img"/>
        </div>
    </div>
}

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            
                <Field placeholder={'Login'} name={'login'} component={Input} validate={required} />
            
            
                <Field placeholder={'Password'} type={'password'} name={'password'} component={Input} validate={required} />
            
            
                <Field type={'checkbox'} name={'rememberMe'} component={'input'} /> Remember me
            
            
                <button>LOGIN</button>
                {props.error && <div className={classes.incorrect_data}> {props.error} </div>}
            
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

export default connect(null, { login, logout })(withAuthRedirect(Login));