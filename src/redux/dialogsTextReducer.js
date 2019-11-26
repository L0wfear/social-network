const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let initialState = null;

const dialogsTextReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state = action.body;
            return state;
        default:
            return state;
    }
}

export let updateMessage = (userID, body) => {
    return ({type: UPDATE_NEW_MESSAGE_TEXT, userID, body});
}

export default dialogsTextReducer;