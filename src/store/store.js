import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { imageReducer } from "./reducers";
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
    imageReducer: imageReducer,
})

export const store = createStore(reducers , composeWithDevTools(applyMiddleware(sagaMiddleware)))