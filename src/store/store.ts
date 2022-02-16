import {combineReducers, configureStore} from '@reduxjs/toolkit'
import loginReducer, {getTokenWorkerSaga} from "./loginSlice";
import createSagaMiddleware from 'redux-saga';
import { takeEvery} from 'redux-saga/effects'


const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    login: loginReducer,
})


export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
})

function* rootWatcher() {
    yield takeEvery('SAGA/GET_TOKEN', getTokenWorkerSaga)
}

sagaMiddleware.run(rootWatcher)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch