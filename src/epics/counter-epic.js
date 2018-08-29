import axios from 'axios';
import { from, of, defer } from 'rxjs';
import { ofType } from 'redux-observable';
import { map, mergeMap, delay, catchError, retry } from 'rxjs/operators';
import actionTypes, {
  fetchInitialSucceeded,
  fetchInitialFailed
} from '../actions/counter-actions';

const fetchInitialCount = action$ =>
  action$.pipe(
    ofType(actionTypes.FETCH_INITIAL_COUNTER),
    mergeMap(() =>
      defer(() => from(axios.get('asdas'))).pipe(
        retry(5),
        map(response => fetchInitialSucceeded(response.data.counter)),
        catchError(error => of(fetchInitialFailed(error)))
      )
    )
  );

export default fetchInitialCount;
