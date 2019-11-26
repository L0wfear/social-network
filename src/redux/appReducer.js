import {authMe} from './loginReducer';

const INITIALIZE_APP = 'INITIALIZE_APP';

const initialState = {
   initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE_APP: {
            return {
                ...state, initialized: true
            }
        }
        default: {
            return {...state};
        }
    }
}

const initializeApp = () => {
    return ({ type: INITIALIZE_APP});
}

export const initialize = () => (dispatch) => {
       let authPromise = dispatch(authMe());
        Promise.all([authPromise])
        .then(() => {
            dispatch(initializeApp());
        })
}

export default appReducer;