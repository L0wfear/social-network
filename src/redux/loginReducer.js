import {loginAPI} from '../api/api';
import {stopSubmit} from 'redux-form';

const SET_USER_LOGIN = 'SET_USER_LOGIN';

let initialState = {
   id: null,
   email: null,
   login: null
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_LOGIN: {
            return {
                ...state, ...action.data
            }
        }
        default: {
            return {...state};
        }
    }
}

export let setUserLogin = (id, email, login, isAuth = false) => {
    return ({ type: SET_USER_LOGIN, data: {id, email, login, isAuth}  });
}

export const authMe = () => (dispatch) => {
        loginAPI.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let { id, email, login } = data.data;
                    dispatch (setUserLogin(id, email, login, true));
                }
            });
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        loginAPI.login(email, password, rememberMe)
            .then(response => {              
                if (response.data.resultCode === 0) {
                    dispatch(authMe());
                }
                else {
                    let message = response.data.messages[0];
                    dispatch(stopSubmit('login', {_error: message}));
                }
            })
    }
}

export const logout = () => {
    return (dispatch) => {
        loginAPI.logout()
            .then(response => {
                if(response.data.resultCode === 0) {
                    dispatch(setUserLogin(null, null, null, false));
                }
            })
    }
}

export default loginReducer;