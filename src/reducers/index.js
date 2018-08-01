import actionTypes from '../actions/counter-actions';

const defaultState = {
  counter: 0,
  error: null,
  loading: true,
  snackbarOpen: false,
};

const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case actionTypes.FETCH_INITIAL_COUNTER_SUCCEEDED:
      return {
        ...state,
        counter: action.data,
        loading: false,
      };
    case actionTypes.FETCH_INITIAL_COUNTER_FAILED:
      return {
        ...state,
        error: action.error,
        loading: false,
        snackbarOpen: true,
      };
    case actionTypes.CLOSE_SNACKBAR:
      return {
        ...state,
        snackbarOpen: false,
      };
    case actionTypes.CLEAN_STATE:
      return {
        ...defaultState,
      };
    default:
      return state;
  }
};

export default rootReducer;
