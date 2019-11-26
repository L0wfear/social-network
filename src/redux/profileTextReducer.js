const UPDATE_PROFILE_TEXT = 'UPDATE_PROFILE_TEXT';

let initialState = '';

const profileTextReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PROFILE_TEXT:
            state = action.body;
            return state;
        default:
            return state;
    }
}

export let updateProfileTextCreator = (body) => {
    return ({type: UPDATE_PROFILE_TEXT, body: body});
}

export default profileTextReducer;