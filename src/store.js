import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from './reducers';
// import rootSaga from './sagas';
import rootEpic from './epics';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const sagaMiddleware = createSagaMiddleware();
const epicMiddleware = createEpicMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(epicMiddleware))
);
// sagaMiddleware.run(rootSaga);
epicMiddleware.run(rootEpic);

export default store;
