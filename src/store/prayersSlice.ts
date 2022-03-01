import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {call, put} from "redux-saga/effects";
import {prayersApi} from "../api/api";
import {err} from "react-native-svg/lib/typescript/xml";


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
        deletePrayer(state, action: PayloadAction<{ prayerId: number }>) {
            state.prayers = state.prayers.filter(item => item.id !== action.payload.prayerId)
        }
    },
})

//-----------------------------------------Sagas----------------------------------------------------------------------//

export function* getPrayersWorkerSaga(action: ReturnType<typeof getPrayersAction>) {
    try {
        const res = yield call(prayersApi.getPrayers)
        yield put(getPrayer({prayers: res.data}));
    } catch (error) {
        alert(error)
    }
}

export const getPrayersAction = () => ({type: 'SAGA/GET_PRAYERS'})

export function* addPrayerWorkerSaga(action: ReturnType<typeof addPrayerAction>) {
    try {
        const res = yield call(prayersApi.addPrayer, action.columnId, action.title, "", true)
        yield put(addPrayer({
            prayer: {
                id: res.data.id,
                title: res.data.title,
                description: res.data.description,
                checked: res.data.checked,
                columnId: res.data.columnId,
            }
        }))
    } catch (error) {
        alert(error)
    }
}

export const addPrayerAction = (columnId: number, title: string) => ({type: 'SAGA/ADD_PRAYER', columnId, title})

export function* checkedPrayerWorkerSaga(action: ReturnType<typeof checkedPrayerAction>) {
    try {
        yield call(prayersApi.toggleCheckedPrayer, action.prayerId, false);
        const res = yield call(prayersApi.getPrayers)
        yield put(getPrayer({prayers: res.data}));
    } catch (error) {
        alert(error)
    }
}

export const checkedPrayerAction = (prayerId: number) => ({type: 'SAGA/CHECKED_PRAYER', prayerId});

export function* unCheckedPrayerWorkerSaga(action: ReturnType<typeof unCheckedPrayerAction>) {
    try {
        yield call(prayersApi.toggleCheckedPrayer, action.prayerId, true);
        const res = yield call(prayersApi.getPrayers)
        yield put(getPrayer({prayers: res.data}));
    } catch (error) {
        alert(error)
    }
}

export const unCheckedPrayerAction = (prayerId: number) => ({type: 'SAGA/UNCHECKED_PRAYER', prayerId});

export function* deletePrayerWorkerSaga(action: ReturnType<typeof deletePrayerAction>) {
    try {
        yield call(prayersApi.deletePrayer, action.prayerId);
        yield put(deletePrayer({prayerId: action.prayerId}))
    } catch (error) {
        alert(error)
    }
}

export const deletePrayerAction = (prayerId: number) => ({type: 'SAGA/DELETE_PRAYER', prayerId});

export const {getPrayer, addPrayer, deletePrayer} = prayerSlice.actions
export default prayerSlice.reducer