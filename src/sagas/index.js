import { fork } from "@redux-saga/core/effects";
import { authSaga } from "./authSaga";
import  {registrationSaga} from "./registrationSaga";
import {profileSaga} from "./profileSaga";
import {routeSaga} from "./routSaga";
import {addressListSaga} from "./addressListSaga";

export function* rootSaga() {
  yield fork(authSaga);
  yield fork(registrationSaga);
  yield fork(profileSaga);
  yield fork(routeSaga);
  yield fork(addressListSaga)
}