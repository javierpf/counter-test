import counterSaga from './counter-saga';

function* rootSaga() {
    yield [
      counterSaga(),
    ];
  }
  
  export default rootSaga;