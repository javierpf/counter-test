import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import actionTypes, { fetchInitialSucceeded, fetchInitialFailed }
  from '../actions/counter-actions';

function* fetchInitial() {
  try {
    const response = yield axios.get('asdas');
    yield put(fetchInitialSucceeded(response.data.counter));
  } catch (e) {
    yield put(fetchInitialFailed(e));
  }
}

function* aperturaSaga() {
  yield takeEvery(actionTypes.FETCH_INITIAL_COUNTER, fetchInitial);
}

export default aperturaSaga;
