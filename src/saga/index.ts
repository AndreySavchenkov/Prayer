// import {takeEvery, put,call} from 'redux-saga/effects'
// import {setToken} from "../store/loginSlice";
// import {signAPI} from "../api/api";
//
//
// export function* workerSaga() {
//     const data = yield call(signAPI.signUp())
//     yield put(setToken())
// }
//
// export function* watchClickSaga() {
//    yield takeEvery(setToken, workerSaga)
// }
//
// export default function* rootSaga() {
//     yield watchClickSaga();
// }