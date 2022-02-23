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
    columns: []
} as InitialState

const columnSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        getColumn(state, action: PayloadAction<{ columns: Columns }>) {
            state.columns = action.payload.columns
        },
        addColumn(state, action: PayloadAction<{ column: Column }>){
            state.columns.push(action.payload.column)
        },
        deleteColumn(state,action: PayloadAction<{columnId: number}>){
            state.columns = state.columns.filter(item => item.id !== action.payload.columnId)
        }
    },
})


//-----------------------------------------Sagas-----------------------------------------------------------------------

export function* getColumnsWorkerSaga(action: ReturnType<typeof getColumnsAction>) {
    const res = yield call(columnApi.getColumns)
    console.log(res)
    yield put(getColumn({columns: res.data}));
}
export const getColumnsAction = () => ({type: 'SAGA/GET_COLUMNS'})

export function* addColumnWorkerSaga(action: ReturnType<typeof addColumnAction>){
    const res = yield call(columnApi.addColumn, action.title, "",0);
    console.log(res)
    yield put(addColumn({
        column:{
         id: res.data.id,
         description: res.data.description,
         title: res.data.title
        }
    }))
}
export const addColumnAction = (title: string) => ({type: 'SAGA/ADD_COLUMN', title})

export function* deleteColumnWorkerSaga(action: ReturnType<typeof deleteColumnAction>){
    const res = yield call(columnApi.deleteColumn, action.columnId)
    yield put(deleteColumn(res.data.columnId))
}
export const deleteColumnAction =(columnId: string) => ({type: 'SAGA/DELETE_COLUMN', columnId})

export const {getColumn, addColumn,deleteColumn} = columnSlice.actions
export default columnSlice.reducer