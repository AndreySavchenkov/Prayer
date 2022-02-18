import {combineReducers, configureStore} from '@reduxjs/toolkit'
import loginReducer, {getToken, getTokenWorkerSaga} from "./loginSlice";
import createSagaMiddleware from 'redux-saga';
import {takeEvery} from 'redux-saga/effects'
import columnSlice, {getColumnsWorkerSaga} from "./columnSlice";
import prayersSlice, {getPrayersWorkerSaga} from "./prayersSlice";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    login: loginReducer,
    column: columnSlice,
    prayer: prayersSlice,
})


export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
})

function* rootWatcher() {
    yield takeEvery('SAGA/GET_TOKEN', getTokenWorkerSaga);
    yield takeEvery('SAGA/GET_COLUMNS', getColumnsWorkerSaga);
    yield takeEvery('SAGA/GET_PRAYERS', getPrayersWorkerSaga);
}

sagaMiddleware.run(rootWatcher)

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch