import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {call, put} from "redux-saga/effects";
import {columnApi} from "../api/api";


export type Column = {
    title: string | null,
    description: string | null,
    id: number | null
}
export type Columns = Column[]

type InitialState = {
    columns: Columns
}

const initialState = {
    columns: []
} as InitialState

const columnSlice = createSlice({
    name: 'column',
    initialState,
    reducers: {
        getColumn(state, action: PayloadAction<{ columns: Columns }>) {
            state.columns = action.payload.columns
        },
        addColumn(state, action: PayloadAction<{ column: Column }>) {
            state.columns.push(action.payload.column)
        },
        deleteColumn(state, action: PayloadAction<{ columnId: number }>) {
            state.columns = state.columns.filter(item => item.id !== action.payload.columnId)
        }
    },
})

//-----------------------------------------Sagas----------------------------------------------------------------------//

export function* getColumnsWorkerSaga(action: ReturnType<typeof getColumnsAction>) {
    try {
        const res = yield call(columnApi.getColumns)
        yield put(getColumn({columns: res.data}));
    } catch (error) {
        alert(error)
    }
}

export const getColumnsAction = () => ({type: 'SAGA/GET_COLUMNS'})

export function* addColumnWorkerSaga(action: ReturnType<typeof addColumnAction>) {
    try {
        const res = yield call(columnApi.addColumn, action.title, "", 0);
        yield put(addColumn({
            column: {
                id: res.data.id,
                description: res.data.description,
                title: res.data.title
            }
        }))
    } catch (error) {
        alert(error)
    }
}

export const addColumnAction = (title: string) => ({type: 'SAGA/ADD_COLUMN', title})

export function* deleteColumnWorkerSaga(action: ReturnType<typeof deleteColumnAction>) {
    try {
        yield call(columnApi.deleteColumn, action.columnId)
    } catch (error) {
        alert(error)
    }
}

export const deleteColumnAction = (columnId: number) => ({type: 'SAGA/DELETE_COLUMN', columnId})

export const {getColumn, addColumn, deleteColumn} = columnSlice.actions
export default columnSlice.reducer