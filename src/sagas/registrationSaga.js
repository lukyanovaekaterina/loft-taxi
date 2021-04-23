import {takeEvery, call, put} from 'redux-saga/effects';
import { REGISTRATION, logIn } from '../actions';
import { sendRequestToRegister} from "../api";

export function* registrationSaga(action) {
  const{email, password, name} = action.payload;
  const success = yield call(sendRequestToRegister, email, password, name);
  if (success) {
    yield put(logIn());
  }
}

export function* registrationSaga() {
  yield takeEvery(REGISTRATION, registrationSaga)
}