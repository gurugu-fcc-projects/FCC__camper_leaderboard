import * as types from '../constants/ActionTypes';

export const fetch30Request = () => ({
  type: types.FETCH_30_REQUEST,
});
export const fetch30Success = (body) => ({
  type: types.FETCH_30_SUCCESS,
  body
});
export const fetch30Failure = (ex) => ({
  type: types.FETCH_30_FAILURE,
  ex
});
export const fetchAllRequest = () => ({
  type: types.FETCH_ALL_REQUEST,
});
export const fetchAllSuccess = (body) => ({
  type: types.FETCH_ALL_SUCCESS,
  body
});
export const fetchAllFailure = (ex) => ({
  type: types.FETCH_ALL_FAILURE,
  ex
});
