import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {authApi} from "../api/api";
import {call, put} from 'redux-saga/effects'
import {getColumn} from "./columnSlice";


type InitialState = {
    name: string,
    email: string,
    id: string,
    password: string,
    token: string,
}

const initialState = {
    name: 'AndreySavchenkov',
    email: 'andreySavchenkov@gmail.com',
    id: '1471',
    password: 'f6ee94ecb014f74f887b9dcc52daecf73ab3e3333320cadd98bcb59d895c52f5',
    token: 'c5d7b17681772419da162c1fd3e57ae3871a147449fd78e62d452e34c8974ed5',
} as InitialState

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setToken(state, action: PayloadAction<{ name: string, email: string, id: string, password: string, token: string }>) {
            state.name = action.payload.name
            state.email = action.payload.email
            state.id = action.payload.id
            state.password = action.payload.password
            state.token = action.payload.token
        },
    },
})
//----------------------------------------------------Sagas----------------------------------------------------------//
export function* getTokenWorkerSaga(action: ReturnType<typeof getToken>) {
    const res = yield call(authApi.signUp, action.email, action.name, action.password)
    console.log(res)
    const token = res.data.token;
    if (token) {
        yield put(setToken({
            name: res.data.name,
            email: res.data.email,
            id: res.data.id,
            password: res.data.password,
            token: res.data.token
        }));
        // yield put(getColumn({columns: res.data.columns}));
    }
}
export const getToken = (email: string, name: string, password: string) => ({
    type: 'SAGA/GET_TOKEN',
    email,
    name,
    password
})


export const {setToken} = loginSlice.actions
export default loginSlice.reducer