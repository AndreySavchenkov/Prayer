import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {call, put} from "redux-saga/effects";
import {authApi, columnApi} from "../api/api";
import {setToken} from "./loginSlice";


type Column = {
    title: string | null,
    description: string | null,
    id: number | null
}
type Columns = Column[]

type InitialState = {
    columns: Columns
}

const initialState = {
    columns: [
        // {title: 'BACKLOG', description: null, id: 3511},
        // {title: 'TODO', description: null, id: 3512},
        // {title: 'IN PROGRESS', description: null, id: 3513},
        // {title: 'DONE', description: null, id: 3514}
    ]
} as InitialState

const columnSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        getColumn(state, action: PayloadAction<{ columns: Columns }>) {
            state.columns = action.payload.columns
        },
    },
})


//-----------------------------------------Sagas-----------------------------------------------------------------------

export function* getColumnsWorkerSaga(action: ReturnType<typeof getColumnsAction>) {
    const res = yield call(columnApi.getColumns)
    console.log(res)
    yield put(getColumn({columns: res.data}));
}
export const getColumnsAction = () => ({type: 'SAGA/GET_COLUMNS'})

export const {getColumn} = columnSlice.actions
export default columnSlice.reducer