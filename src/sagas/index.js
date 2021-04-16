import { fork } from "@redux-saga/core/effects";
import { authSaga } from "./authSaga";

export function* rootSaga() {
  yield fork(authSaga);
}