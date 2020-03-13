import { all, fork, takeLatest } from 'redux-saga/effects';
import { CHANGE_LOCALE } from '../Language/constants';

function* watchLanguageChange() {
  yield takeLatest(CHANGE_LOCALE, function*() {
    console.log('hit');
  });
}

export default function* app() {
  yield all([fork(watchLanguageChange)]);
}
