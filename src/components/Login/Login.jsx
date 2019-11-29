import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {Input} from '../Commons/FormsControl/FormsControl';
import {required} from '../../utilits/validator';
import { connect } from 'react-redux';
import { login, logout } from '../../redux/loginReducer';
import withAuthRedirect from '../../hoc/authRedirect';

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.login, formData.password, formData.rememberMe);
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit = {onSubmit} />
    </div>
}

const LoginForm = (props) => { 
    return (
        <form onSubmit = {props.handleSubmit} >
            <div>
               <Field placeholder = {'Login'} name = {'login'} component = {Input} validate = {required} />
            </div>
            <div>
                <Field placeholder = {'Password'} type = {'password'} name = {'password'} component = {Input} validate = {required} />
            </div>
            <div>
                <Field type= {'checkbox'} name = {'rememberMe'} component = {'input'}/> Remember me
            </div>
            <div>
                <button>LOGIN</button>
                {props.error && <div> {props.error} </div>}
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default connect(null, {login, logout})(withAuthRedirect (Login));