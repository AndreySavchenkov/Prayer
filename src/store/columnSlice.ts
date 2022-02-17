import {createSlice, PayloadAction} from "@reduxjs/toolkit";


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
        {title: 'BACKLOG', description: null, id: 3511},
        {title: 'TODO', description: null, id: 3512},
        {title: 'IN PROGRESS', description: null, id: 3513},
        {title: 'DONE', description: null, id: 3514}
    ]
} as InitialState

const columnSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        getColumn(state, action: PayloadAction<{ columns: Column[] }>) {
            state.columns = action.payload.columns
        },
    },
})


export const {getColumn} = columnSlice.actions
export default columnSlice.reducer