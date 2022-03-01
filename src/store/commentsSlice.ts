import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {call, put} from "redux-saga/effects";
import {columnApi, commentsApi} from "../api/api";
import {Column, deleteColumnAction, getColumn} from "./columnSlice";


export type Comment = {
    id: number,
    body: string,
    created: string,
    prayerId: number,
    userId: number
}

export type Comments = Comment[]

type InitialState = {
    comments: Comments
}

const initialState = {
    comments: []
} as InitialState

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        addComment(state, action: PayloadAction<{ comment: Comment }>) {
            state.comments.push(action.payload.comment)
        },
        getComments(state, action: PayloadAction<{comments: Comments}>){
            state.comments = action.payload.comments
        },
        deleteComment(state, action: PayloadAction<{ commentId: number }>) {
            state.comments = state.comments.filter(item => item.id !== action.payload.commentId)
        }
    },
})

//-----------------------------------------Sagas----------------------------------------------------------------------//

export function* addCommentWorkerSaga(action: ReturnType<typeof addCommentAction>) {
    try {
        const res = yield call(commentsApi.addComment, action.body,  action.prayerId)
        console.log(res)
        yield put(addComment({
            comment: {
                id: res.data.id,
                body: res.data.body,
                created: res.data.greated,
                prayerId: res.data.prayerId,
                userId: res.data.userId
            }
        }))
    } catch (error) {
        alert(error)
    }
}

export const addCommentAction = (body: string, prayerId: number) => ({type: 'SAGA/ADD_COMMENT', body, prayerId})

export function* getCommentsWorkerSaga(action: ReturnType<typeof getCommentsAction>){
    try {
        const res = yield call(commentsApi.getComments)
        yield put(getComments({comments: res.data}));
    } catch (error) {
        alert(error)
    }
}

export const getCommentsAction = () => ({type: 'SAGA/GET_COMMENTS'})

export function* deleteCommentWorkerSaga(action: ReturnType<typeof deleteCommentAction>) {
    try {
        yield call(commentsApi.deleteComment, action.commentId)
        yield put(deleteComment({commentId: action.commentId}))
    } catch (error) {
        alert(error)
    }
}

export const deleteCommentAction = (commentId: number) => ({type: 'SAGA/DELETE_COMMENT', commentId})


export const {addComment,getComments, deleteComment} = commentsSlice.actions
export default commentsSlice.reducer