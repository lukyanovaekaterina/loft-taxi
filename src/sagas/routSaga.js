import {call, put, takeEvery} from 'redux-saga/effects';
import {ROUTES, SET_ROUTES} from "./../actions";
import {fetchRoute} from "./../api";

export function* authSaga() {
  yield takeEvery(AUTHENTICATE, authenticateSaga);
}
export function* routesSaga() {
  const routesList = yield call(fetchRoute);
  if (!routesList) {
      return;
  }
  yield put(routesAction(routesList));
}
export function* routeSaga() {
  yield takeEvery(ROUTES, routesSaga)
}

