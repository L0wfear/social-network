import React from 'react';

class ProfileStatus extends React.Component {
  
  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    this.setState({editMode: true});
  }

  deactivateEditMode = () => {
    this.setState({editMode: false});
    this.props.updateStatus(this.state.status);
  }

  onChangeStatus = (e) => {
    this.setState({status: e.currentTarget.value});
  }

  componentDidUpdate (prevProps, prevState) {
    if(prevProps.status !== this.props.status) {
      this.setState({status: this.props.status});}
  }

  render() {
    return (
      <div>
        <div>
          {!this.state.editMode &&
            <span onClick = {this.activateEditMode}> {this.state.status ||'set'} </span>
          }
        </div>
        <div>
          {this.state.editMode &&
            <input onChange = {this.onChangeStatus} autoFocus = {true} onBlur = {this.deactivateEditMode} type="text" value = {this.state.status} />
            }
        </div>
      </div>)
  }
}

export default ProfileStatus;
