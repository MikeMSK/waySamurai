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
        return instance.get(
            `/auth/me`)
            .then(response => response.data)
    },
}

export const usersAPI = {
    getUsers: (currentPage: number, pageSize: number) => {
        return instance.get(
            `users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow: (id: number) => {
        return instance.post(
            `follow/${id}`)
            .then(response => response.data)
    },
    unfollow: (id: number) => {
        return instance.delete(
            `follow/${id}`)
            .then(response => response.data)
    },
}

export const profileAPI = {

    getProfile: (userID: number) => {
        return instance.get(
            `profile/` + userID)
    },
    getStatus: (userID: number) => {
        return instance.get(
            `profile/status/` + userID)
    },
    updateStatus: (status: string) => {
        return instance.put(
            `profile/status`, {status: status})
    },
}


