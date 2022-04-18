import axios from 'axios';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { getImagesAction, GET_ASYNC_IMAGES, GET_IMAGES } from '../store/reducers';


function* getImagesSaga() {
    try {
        const resp = yield call( () => axios.get('https://jsonplaceholder.typicode.com/photos?_limit=24'));
        yield put(getImagesAction(resp.data));
    } catch (e) {
        yield console.log(e)
    }
    
}

export function* watcherSaga() {
    yield takeLatest(GET_ASYNC_IMAGES, getImagesSaga)
}