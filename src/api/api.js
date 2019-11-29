import * as axios from 'axios';


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "fbcd69f4-3a1b-4b42-8b90-9ecc7dfafe4a"
    }
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },

    unfollowSucces(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data;
            });
    },

    followSucces(id) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data;
            });
    }
}


export const profileAPI = {
    getProfile(userID) {
        return instance.get(`profile/${userID}`);
    },

    getStatus(userID) {
        return instance.get(`profile/status/${userID}`);
    },

    updateStatus(status) {
        return instance.put(`profile/status`, {status});
    }
}

export const loginAPI = {
    authMe() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            });
    },

    login(email, password, rememberMe) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },

    logout(){
        return instance.delete(`auth/login`)
    }
}