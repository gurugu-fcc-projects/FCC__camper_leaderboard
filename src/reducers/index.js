import * as types from '../constants/ActionTypes';

const initial_state = {
  isRequesting: false,
  show30days: true,
  score30days: [],
  scoreAlldays: [],
  error: '',
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
        show30days: true,
        score30days: action.data,
      };
    case types.FETCH_30_FAILURE:
      return {
        ...state,
        error: action.ex,
      };
    case types.FETCH_ALL_REQUEST:
      return {
        ...state,
        isRequesting: true,
      };
    case types.FETCH_ALL_SUCCESS:
      return {
        ...state,
        show30days: false,
        scoreAlldays: action.data,
      };
    case types.FETCH_ALL_FAILURE:
      return {
        ...state,
        error: action.ex,
      };
    default:
      return state;
  }
};

export default leaderboardApp;
