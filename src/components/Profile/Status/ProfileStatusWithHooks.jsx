import React, {useState, useEffect} from 'react';

const ProfileStatusWithHooks = (props) => {
    
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  }

  const changeStatus = (e) => {
    setStatus(e.currentTarget.value);
  }

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);
  
    return (
      <div>
        <div>
          { !editMode &&
            <span onClick = {activateEditMode}> {status ||'set'} </span>
          }
        </div>
        <div>
          { editMode &&
            <input onChange = {changeStatus} onBlur = {deactivateEditMode} autoFocus ={true} type="text" value = {status}  />
            }
        </div>
      </div>)
  }

export default ProfileStatusWithHooks;
