import React from 'react';
import classes from './../../Dialogs/./Dialogs.module.css';
import AllText from './AllText/AllText';
import {reduxForm, Field} from 'redux-form';

const DialogsText = (props) => {
    
    let i = 0;
    const onSubmit = (formData) => {
        props.updateMessage(props.userID, formData);
     }
    return (
        <div className={classes.dialogs_body}>
            {props.userID ? props.dialogsData[props.userID - 1].text.map(item => <AllText key = {i++} text = {item} />) : 'Text'}

            <DialogsTextAreaForm onSubmit = {onSubmit} />
        </div> 
    );
}

const DialogsTextArea = (props) => {
    return <form onSubmit = {props.handleSubmit} >
    <div>
        <Field name = {'message'} component = {'textarea'} placeholder = 'Enter text'/>
    </div>
    <div>
        <button>SEND</button>
    </div>
</form>
}

const DialogsTextAreaForm = reduxForm({form: 'message'})(DialogsTextArea);

export default DialogsText;

