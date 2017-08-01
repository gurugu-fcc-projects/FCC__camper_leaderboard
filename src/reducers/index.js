import * as types from '../constants/ActionTypes';

const initial_state = {
  isRequesting: true,
  errorMessage: '',
  show30days: true,
  receivedData: [],
};

const leaderboardApp = (
  state = initial_state,
  action = {}
) => {
  switch(action.type) {
    case types.FETCH_30_REQUEST:
      return {
        ...state,
        isRequesting: true,
      };
    case types.FETCH_30_SUCCESS:
      return {
        ...state,
        isRequesting: false,
        show30days: true,
        receivedData: action.data,
      };
    case types.FETCH_30_FAILURE:
      return {
        ...state,
        errorMessage: action.ex.message,
      };
    case types.FETCH_ALL_REQUEST:
      return {
        ...state,
        isRequesting: true,
      };
    case types.FETCH_ALL_SUCCESS:
      return {
        ...state,
        isRequesting: false,
        show30days: false,
        receivedData: action.data,
      };
    case types.FETCH_ALL_FAILURE:
      return {
        ...state,
        errorMessage: action.ex,
      };
    default:
      return state;
  }
};

export default leaderboardApp;
