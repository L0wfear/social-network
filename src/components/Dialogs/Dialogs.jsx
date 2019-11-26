import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import DialogsText from './DialogsText/DialogsText';



const Dialogs = (props) => {
    let dialogsEl = props.dialogsData.map(d => <DialogItem id = {d.id} key = {d.id}
        name = {d.name} text = {d.text} imgAlt = {d.imgAlt} imgSrc = {d.imgSrc} />);
    let userID = props.match.params.userID;
    return (
        <div className={classes.messages}>
            <div className={classes.allDialogs}>
                {dialogsEl}
            </div>
            <DialogsText userID = {userID} text = {dialogsEl.text} updateMessage = {props.updateMessage} dialogsData = {props.dialogsData}/>
        </div>
    );
}

export default Dialogs;

