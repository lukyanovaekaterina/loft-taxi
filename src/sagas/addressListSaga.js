import { takeEvery, call, put } from "redux-saga/effects";
import {
  getAddressListFailure,
  getAddressListSuccess,
  GET_ADDRESS_LIST,
} from "../actions";
import { serverGetAddressList } from "../api";

export function* addressSaga() {
  const data = yield call(serverGetAddressList);
  if (data.addresses) {
    yield put(getAddressListSuccess(data.addresses));
  } else {
    yield put(getAddressListFailure("ошибка получения адреса"));
  }
}

export function* addressListSaga() {
  yield takeEvery(GET_ADDRESS_LIST, addressSaga);
}
