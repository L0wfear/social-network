import {usersAPI} from '../api/api';

const FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_TOTAL_COUNT = 'SET_TOTAL_COUNT',
    TOGGLE_DISABLING_BUTTON = 'TOGGLE_DISABLING_BUTTON';

let initialState = {
    users: [],
    pageSize: 5,
    totalCount: 30,
    currentPage: 1,
    isFollowingInProgress: []
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_COUNT:
            return {
                ...state, totalCount: action.totalCount
            }
        case TOGGLE_DISABLING_BUTTON:
            return {
                ...state, isFollowingInProgress: action.isFetching
                ? [...state.isFollowingInProgress, action.userID]
                : [state.isFollowingInProgress.filter(id => id !== action.userID)]
            }
        default:
            return state;
    }
}

export let followAC = (userID) => ({ type: FOLLOW, userID });
export let unfollowAC = (userID) => ({ type: UNFOLLOW, userID });
export let toggleDisablingBtn = (userID, isFetching) => ({ type: TOGGLE_DISABLING_BUTTON, userID, isFetching });
export let setUsers = (users) => ({ type: SET_USERS, users });
export let setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export let setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        usersAPI.getUsers(currentPage, pageSize)
             .then(data => {
                dispatch(setUsers(data.items));
                dispatch(setTotalCount(data.totalCount));
             });
    }
}

export const unfollow = (id) => {
    return (dispatch) => {
        dispatch (toggleDisablingBtn(id, true));
                            usersAPI.unfollowSucces(id)
                            .then(data => {
                                if (data.resultCode === 0){
                                    dispatch (unfollowAC(id));
                                    dispatch (toggleDisablingBtn(id, false));}
                            });
    }
}

export const follow = (id) => {
    return (dispatch) => {
        dispatch (toggleDisablingBtn(id, true));
                            usersAPI.followSucces(id)
                                .then(data => {
                                    if (data.resultCode === 0) {
                                        dispatch (followAC(id));
                                        dispatch (toggleDisablingBtn(id, false));
                                    }
                                });
    }
}


export default usersReducer;