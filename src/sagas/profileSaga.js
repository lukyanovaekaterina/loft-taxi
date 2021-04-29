import {call, put, takeEvery} from 'redux-saga/effects';
import {SAVE_CARD} from "../actions";
import {serverProfile} from "../api";

export function* profileSaga(action) {

  const {CardName, cardNumber, expiryDate, cvc, token} = action.payload;
  const success = yield call(serverProfile, CardName, cardNumber, expiryDate, cvc, token);

  if (!success){
    return;
  }
  yield put(SAVE_CARD(true));
}

export function* profileSaga() {
  yield takeEvery(SAVE_CARD, profileSaga);
}