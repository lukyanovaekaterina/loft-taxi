import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import { authSaga } from './sagas/authSaga'

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(authSaga);