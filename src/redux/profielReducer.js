import {profileAPI} from '../api/api';

const ADD_POST = 'ADD_POST',
      SET_USER_INFO = 'SET_USER_INFO',
      GET_STATUS = 'GET_STATUS',
      TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    posts: [
        { id: 1, text: 'This is first message', likesCount: 0 },
        { id: 2, text: 'This is second message', likesCount: 23 }],
    userInfo: null,
    status:'',
    isFetching: false
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let stateCopy = { ...state, posts: [...state.posts, { id: 3, text: action.postText, likesCount: 0 }] };
            return stateCopy;
        }
        case SET_USER_INFO: {
            return { ...state, userInfo: action.userInfo };
        }
        case GET_STATUS: {
            return { ...state, status: action.status };
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching };
        }
        default: {
            let stateCopy = { ...state };
            return stateCopy;
        }
    }
}

export const addPostCreator = (text) => {
    return ({ type: ADD_POST, postText: text });
}

export const setUserInfo = (userInfo) => {
    return ({ type: SET_USER_INFO, userInfo });
}

export const setUserStatus = (status) => {
    return ({type: GET_STATUS, status});
}

const setIsFetching = (isFetching) => {
    return ({ type: TOGGLE_IS_FETCHING, isFetching });
}

export const getProfileInfo = (userID) => (dispatch) => {
        dispatch(setIsFetching(false));
        profileAPI.getProfile(userID)
        .then(response => {
            dispatch(setUserInfo(response.data));
            dispatch(setIsFetching(true));
        });
}

export const getStatus = (userID) => (dispatch) => {
        profileAPI.getStatus(userID)
        .then(response => {
            dispatch(setUserStatus(response.data));
        });
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
    .then(response => {
        if(response.data.resultCode === 0){
        dispatch(setUserStatus(status))}
    });
}

export default profileReducer;