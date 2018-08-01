const actionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  FETCH_INITIAL_COUNTER: 'FETCH_INITIAL_COUNTER',
  FETCH_INITIAL_COUNTER_SUCCEEDED: 'FETCH_INITIAL_COUNTER_SUCCEEDED',
  FETCH_INITIAL_COUNTER_FAILED: 'FETCH_INITIAL_COUNTER_FAILED',
  CLOSE_SNACKBAR: 'CLOSE_SNACKBAR',
  CLEAN_STATE: 'CLEAN_STATE',
};

const increment = () => ({
  type: actionTypes.INCREMENT,
});

const decrement = () => ({
  type: actionTypes.DECREMENT,
});

const fetchInitial = () => ({
  type: actionTypes.FETCH_INITIAL_COUNTER,
});

const fetchInitialSucceeded = data => ({
  type: actionTypes.FETCH_INITIAL_COUNTER_SUCCEEDED,
  data,
});

const fetchInitialFailed = error => ({
  type: actionTypes.FETCH_INITIAL_COUNTER_FAILED,
  error,
});

const closeSnackbar = () => ({
  type: actionTypes.CLOSE_SNACKBAR,
});

const cleanState = () => ({
  type: actionTypes.CLEAN_STATE,
});


export default actionTypes;
export {
  increment, decrement, fetchInitial, fetchInitialSucceeded,
  fetchInitialFailed, closeSnackbar, cleanState,
};
