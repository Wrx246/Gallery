import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { getDetailsAction, getImagesAction, GET_ASYNC_DETAILS, GET_ASYNC_IMAGES } from '../store/reducers';

// Асинхронная функция для запроса деталей картинки

async function getDetails(id) {
    const resp = await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
    return resp
}

// Делей на 0,5 мс при первичной загрузке данных

const delay = (ms) => new Promise( res => setTimeout(res, ms))

// Сага для получения деталей картинки

function* getDetailsSaga(action) {
    try {
        yield delay(500)
        const resp = yield call(getDetails, action.payload)
        yield put(getDetailsAction(resp.data))
    } catch (e) {
        yield console.log(e)
    }
}

// Сага для получения первых 24 картинок

function* getImagesSaga() {
    try {
        yield delay(500)
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

