import {createStore, combineReducers, applyMiddleware} from 'redux';
import profileReducer from './profielReducer';
import dialogsReducer from './dialogsReducer';
import profileTextReducer from './profileTextReducer';
import usersReducer from './usersReducer';
import dialogsTextReducer from './dialogsTextReducer';
import loginReducer from './loginReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from './appReducer';

let reducers = combineReducers({
    postsData: profileReducer,
    profileText: profileTextReducer,
    dialogsData: dialogsReducer,
    dialogsText: dialogsTextReducer,
    usersData: usersReducer,
    auth: loginReducer,
    form: formReducer,
    app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store; 