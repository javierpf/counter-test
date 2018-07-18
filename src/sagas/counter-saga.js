import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import actionTypes, { fetchInitialSucceeded, fetchInitialFailed }
    from '../actions/counter-actions';

function* fetchInitial(action) {
    try {
        const response = yield axios.get('http://www.mocky.io/v2/5b3a5ffd2e0000b1161581e6');
        yield put(fetchInitialSucceeded(response.data.counter));
    } catch (e) {
        yield put(fetchInitialFailed(e));
    }
}

function* aperturaSaga() {
    yield takeEvery(actionTypes.FETCH_INITIAL_COUNTER, fetchInitial);
}

export default aperturaSaga;