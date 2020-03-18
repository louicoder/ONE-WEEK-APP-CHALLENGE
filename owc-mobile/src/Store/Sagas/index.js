import { put, call, takeLatest, all } from 'redux-saga/effects';
import * as ACTIONS from '../Actions';

function* watchSignUp () {
  yield takeLatest(ACTIONS.SIGN_UP_ACTION, signUp);
}

function* signUp () {}

export default function* rootSaga () {
  yield all([ watchSignUp() ]);
}
