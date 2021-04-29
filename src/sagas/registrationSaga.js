import { takeEvery, call, put } from "redux-saga/effects";
import { REGISTRATION, logIn } from "../actions";
import { serverRegister } from "../api";

export function* registrationSaga(action) {
  const { email, password, name } = action.payload;
  const response = yield call(serverRegister, email, password, name);
  if (!response.success) {
    return;
  }
    yield put(register(response.token));
  }


export function* registrationSaga() {
  yield takeEvery(REGISTRATION, registrationSaga);
}