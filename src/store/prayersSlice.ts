import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {call, put} from "redux-saga/effects";
import {authApi, columnApi, prayersApi} from "../api/api";
import {setToken} from "./loginSlice";
import {getColumn} from "./columnSlice";


type Prayer = {
    id: number,
    title: string,
    description: string,
    checked: boolean,
    columnId: number,
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
        addPrayer(state, action: PayloadAction<{ prayer: Prayer }>) {
            state.prayers.push(action.payload.prayer)
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


export function* addPrayerWorkerSaga(action: ReturnType<typeof addPrayerAction>) {
    const res = yield call(prayersApi.addPrayer, action.columnId, action.title, "", true)
    console.log(res)
    yield put(addPrayer({
        prayer: {
            id: res.data.id,
            title: res.data.title,
            description: res.data.description,
            checked: res.data.checked,
            columnId: res.data.columnId,
        }

    }))
}
export const addPrayerAction = (columnId: number, title: string) => ({type: 'SAGA/ADD_PRAYER', columnId, title})

export function* checkedPrayerWorkerSaga(action: ReturnType<typeof checkedPrayerAction>) {
    yield call(prayersApi.toggleChechedPrayer, action.prayerId, false);
    const res = yield call(prayersApi.getPrayers)
    console.log(res)
    yield put(getPrayer({prayers: res.data}));
}
export const checkedPrayerAction = (prayerId: number) => ({type: 'SAGA/CHECKED_PRAYER', prayerId});

export function* unCheckedPrayerWorkerSaga(action: ReturnType<typeof unCheckedPrayerAction>) {
    yield call(prayersApi.toggleChechedPrayer, action.prayerId, true);
    const res = yield call(prayersApi.getPrayers)
    console.log(res)
    yield put(getPrayer({prayers: res.data}));
}
export const unCheckedPrayerAction = (prayerId: number) => ({type: 'SAGA/UNCHECKED_PRAYER', prayerId});

export const {getPrayer, addPrayer} = prayerSlice.actions
export default prayerSlice.reducer