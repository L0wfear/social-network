import {connect} from 'react-redux';
import Dialogs from './Dialogs';
import { updateMessage } from '../../redux/dialogsTextReducer';
import { compose } from 'redux';
import {withRouter} from 'react-router-dom';
import React from 'react';

class DialogsContainer extends React.Component {
    render() {
        return <Dialogs {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsData
    }
}

export default compose(connect(mapStateToProps, {updateMessage}), withRouter)(DialogsContainer);

