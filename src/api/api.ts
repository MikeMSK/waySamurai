import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '5a806959-8f18-4ed7-837f-0bbad2316e6b'
    }
});

export const authAPI = {
    authorizeME: () => {
        return instance.get(`/auth/me`)
            .then(response => response.data)
    },
    login: (email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) => {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
            .then(response => response.data)
    },
    logout: () => {
        return instance.delete(`auth/login`)
            .then(response => response.data)
    },
}

export const securityAPI = {
    getCaptchaUrl: () => {
        return instance.get(`security/get-captcha-url`)
            .then(response => response.data)
    }
}

export const usersAPI = {
    requestUsers: (currentPage: number, pageSize: number) => {
        return instance.get(
            `users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
            .catch(err => err.messages)
    },
    follow: (id: number) => {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    unfollow: (id: number) => {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
}

export const profileAPI = {
    getProfile: (userID: number) => {
        return instance.get(`profile/` + userID)
    },
    getStatus: (userID: number) => {
        return instance.get(`profile/status/` + userID)
    },
    updateStatus: (status: string) => {
        return instance.put(
            `profile/status`,
            {status: status})
    },
}


