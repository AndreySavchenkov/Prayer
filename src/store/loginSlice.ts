import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {addTokenFromRedux, authApi, getData} from "../api/api";
import {call, put} from 'redux-saga/effects'
import {getColumn} from "./columnSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";


type InitialState = {
    name: string,
    email: string,
    id: number,
    password: string,
    token: string,
}

const initialState = {
    // name: 'AndreySavchenkov',
    // email: 'andreySavchenkov@gmail.com',
    // id: '1471',
    // password: 'f6ee94ecb014f74f887b9dcc52daecf73ab3e3333320cadd98bcb59d895c52f5',
    // token: 'c5d7b17681772419da162c1fd3e57ae3871a147449fd78e62d452e34c8974ed5',
} as InitialState

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        signUp(state, action: PayloadAction<{ name: string, email: string, id: number, password: string, token: string }>) {
            state.name = action.payload.name
            state.email = action.payload.email
            state.id = action.payload.id
            state.password = action.payload.password
            state.token = action.payload.token
        },
        signIn(state, action: PayloadAction<{ id: number, email: string, name: string, token: string }>) {
            state.name = action.payload.name
            state.email = action.payload.email
            state.id = action.payload.id
            state.token = action.payload.token
        },
    }
})

//----------------------------------------------------Sagas----------------------------------------------------------//

const storeData = async (value) => {
    try {
        await AsyncStorage.setItem('token', value)
    } catch (e) {

    }
}

export function* signUpWorkerSaga(action: ReturnType<typeof signUpAction>) {
    try {
        const res = yield call(authApi.signUp, action.email, action.name, action.password)
        yield call(storeData, res.data.token)
        yield call(getData)
        yield put(signUp({
            name: res.data.name,
            email: res.data.email,
            id: res.data.id,
            password: res.data.password,
            token: res.data.token
        }));
        yield put(getColumn({columns: res.data.columns}));
    } catch (error) {
        alert(error)
    }
}

export const signUpAction = (email: string, name: string, password: string) => ({
    type: 'SAGA/SIGN_UP',
    email,
    name,
    password
})


export function* signInWorkerSaga(action: ReturnType<typeof signInAction>) {
    try {
        const res = yield call(authApi.signIn, action.email, action.password)
        yield call(storeData, res.data.token)
        yield call(addTokenFromRedux)
        yield call(getData)
        yield put(signIn({
            name: res.data.name,
            email: res.data.email,
            id: res.data.id,
            token: res.data.token
        }));
    } catch (error) {
        alert(error)
    }
}

export const signInAction = (email: string, password: string) => ({
    type: 'SAGA/SIGN_IN',
    email,
    password
})


export const {signUp, signIn} = loginSlice.actions
export default loginSlice.reducer