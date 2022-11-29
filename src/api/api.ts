import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '5a806959-8f18-4ed7-837f-0bbad2316e6b'
    }
});

export const usersAPI = {
    getUsers: (currentPage: number, pageSize: number) => {
        return instance.get(
            `users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    setUsers: (userID: number) => {
        return instance.get(
            `profile/` + userID)
    },
    follow: () => {
        return instance.get(
            `/auth/me`)
            .then(response => response.data)
    },
}

