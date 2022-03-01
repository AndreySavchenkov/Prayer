import {combineReducers, configureStore} from '@reduxjs/toolkit'
import loginReducer, {signUpWorkerSaga, signInWorkerSaga} from "./loginSlice";
import createSagaMiddleware from 'redux-saga';
import {takeEvery} from 'redux-saga/effects'
import columnSlice, {addColumnWorkerSaga, deleteColumnWorkerSaga, getColumnsWorkerSaga} from "./columnSlice";
import prayersSlice, {
    addPrayerWorkerSaga,
    getPrayersWorkerSaga,
    checkedPrayerWorkerSaga,
    unCheckedPrayerWorkerSaga, deletePrayerWorkerSaga
} from "./prayersSlice";
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import commentsSlice, {addCommentWorkerSaga, deleteCommentWorkerSaga, getCommentsWorkerSaga} from "./commentsSlice";

const rootReducer = combineReducers({
    login: loginReducer,
    column: columnSlice,
    prayer: prayersSlice,
    comment: commentsSlice,
})

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['login'],
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(sagaMiddleware),
})

function* rootWatcher() {
    yield takeEvery('SAGA/SIGN_IN', signInWorkerSaga);
    yield takeEvery('SAGA/SIGN_UP', signUpWorkerSaga);

    yield takeEvery('SAGA/GET_COLUMNS', getColumnsWorkerSaga);
    yield takeEvery('SAGA/ADD_COLUMN', addColumnWorkerSaga);
    yield takeEvery('SAGA/DELETE_COLUMN', deleteColumnWorkerSaga);

    yield takeEvery('SAGA/GET_PRAYERS', getPrayersWorkerSaga);
    yield takeEvery('SAGA/ADD_PRAYER', addPrayerWorkerSaga);
    yield takeEvery('SAGA/CHECKED_PRAYER', checkedPrayerWorkerSaga);
    yield takeEvery('SAGA/UNCHECKED_PRAYER', unCheckedPrayerWorkerSaga);
    yield takeEvery('SAGA/DELETE_PRAYER', deletePrayerWorkerSaga);

    yield takeEvery('SAGA/ADD_COMMENT', addCommentWorkerSaga);
    yield takeEvery('SAGA/GET_COMMENTS', getCommentsWorkerSaga);
    yield takeEvery('SAGA/DELETE_COMMENT', deleteCommentWorkerSaga);
}

sagaMiddleware.run(rootWatcher)

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch