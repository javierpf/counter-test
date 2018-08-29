import { combineEpics } from 'redux-observable';
import fetchInitialCounter from './counter-epic';

const rootEpic = combineEpics(fetchInitialCounter);

export default rootEpic;
