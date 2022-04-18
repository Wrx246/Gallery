import axios from 'axios';
import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { getDetailsAction, getImagesAction, GET_ASYNC_DETAILS, GET_ASYNC_IMAGES, GET_DETAILS } from '../store/reducers';


async function getDetails(id) {
    const resp = await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
    return resp
}

function* getDetailsSaga(action) {
    
    try {
        const resp = yield call(getDetails, action.payload)
        yield put(getDetailsAction(resp.data))
    } catch (e) {
        yield console.log(e)
    }
}

function* getImagesSaga() {
    try {
        const resp = yield call(() => axios.get('https://jsonplaceholder.typicode.com/photos?_limit=24'));
        yield put(getImagesAction(resp.data));
    } catch (e) {
        yield console.log(e)
    }
    
}

export function* watcherSaga() {
    yield takeEvery(GET_ASYNC_IMAGES, getImagesSaga)
    yield takeEvery(GET_ASYNC_DETAILS, getDetailsSaga)
}

