import axios from "axios";
import AsyncStorage, {useAsyncStorage} from "@react-native-async-storage/async-storage";
import {store} from "../store/store";


export const getData = async () => {
    const token = await AsyncStorage.getItem("token")
    instance.defaults.headers['Authorization'] = "Bearer " + token
};

export const addTokenFromRedux = () => {
    const tokenFromRedux = store.getState().login.token;
    if (tokenFromRedux) {
        console.log('token from redux->', tokenFromRedux)
        instance.defaults.headers['Authorization'] = "Bearer " + tokenFromRedux
    }
}

const instance = axios.create({
    baseURL: 'https://prayer.herokuapp.com',
    timeout: 5000,
});

export const authApi = {
    signUp(email: string, name: string, password: string,) {
        return axios.post('https://prayer.herokuapp.com/auth/sign-up/', {email, name, password,})
    },
    signIn(email: string, password: string) {
        return axios.post('https://prayer.herokuapp.com/auth/sign-in', {email, password})
    }
}

export const columnApi = {
    getColumns() {
        return instance.get('/columns')
    },
    getColumn(columnId) {
        return instance.get(`/columns/${columnId}`)
    },
    addColumn(title: string, description: string, prayerId: number) {
        return instance.post('/columns', {title, description, prayerId})
    },
    deleteColumn(columnId) {
        return instance.delete(`/columns/${columnId}`)
    },
}

export const prayersApi = {
    getPrayers() {
        return instance.get(`/prayers`)
    },
    addPrayer(columnId: number, title: string, description: string, checked: boolean) {
        return instance.post(`/columns/${columnId}/prayers`, {title, description, checked})
    },
    toggleCheckedPrayer(prayerId: number, checked: boolean) {
        return instance.put(`/prayers/${prayerId}`, {checked})
    },
    deletePrayer(prayerId: number) {
        return instance.delete(`prayers/${prayerId}`)
    },
}

export const commentsApi = {
    getComments() {
        return instance.get(`/comments`)
    },
    addComment(body: string, prayerId: number,) {
        return instance.post(`/prayers/${prayerId}/comments`, {body, prayerId})
    },
    deleteComment(commentId: number) {
        return instance.delete(`/comments/${commentId}`)
    },
}