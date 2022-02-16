import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {authApi} from "../api/api";
import { call, put} from 'redux-saga/effects'


type InitialState = {
    Token: string
}

const initialState = {
   Token: ''
} as InitialState

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setToken(state, action: PayloadAction<{ value: string }>) {
            state.Token = action.payload.value
        },
    },
})

export function* getTokenWorkerSaga(action: ReturnType<typeof getToken>) {
    const res = yield call(authApi.signUp, action.email,action.name,action.password)
   console.log(res)

}
export const getToken = (email: string, name: string, password: string) => ({type: 'SAGA/GET_TOKEN', email,name,password})


export const {setToken} = loginSlice.actions
export default loginSlice.reducer