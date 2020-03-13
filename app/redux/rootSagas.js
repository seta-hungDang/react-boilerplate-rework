import { fork, all } from 'redux-saga/effects';
import appSaga from './App/sagas';

export default function* sagas() {
  yield all([fork(appSaga)]);
}
