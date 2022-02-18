import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {call, put} from "redux-saga/effects";
import {authApi, columnApi, prayersApi} from "../api/api";
import {setToken} from "./loginSlice";
import {getColumn} from "./columnSlice";


type Prayer = {
    "id": number,
    "title": string,
    "description": string,
    "checked": boolean,
    "columnId": number,
    // "commentsIds": []
}
type Prayers = Prayer[]

type InitialState = {
    prayers: Prayers
}

const initialState = {
    prayers: []
} as InitialState

const prayerSlice = createSlice({
    name: 'prayer',
    initialState,
    reducers: {
        getPrayer(state, action: PayloadAction<{ prayers: Prayers }>) {
            state.prayers = action.payload.prayers
        },
    },
})


//-----------------------------------------Sagas-----------------------------------------------------------------------

export function* getPrayersWorkerSaga(action: ReturnType<typeof getPrayersAction>) {
    const res = yield call(prayersApi.getPrayers)
    console.log(res)
    yield put(getPrayer({prayers: res.data}));
}
export const getPrayersAction = () => ({type: 'SAGA/GET_PRAYERS'})

export const {getPrayer} = prayerSlice.actions
export default prayerSlice.reducer