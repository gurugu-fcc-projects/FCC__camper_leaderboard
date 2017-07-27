import * as types from '../constants/ActionTypes';
import fetch from 'isomorphic-fetch';

export const fetch30Request = () => ({
  type: types.FETCH_30_REQUEST,
});
export const fetch30Success = (data) => ({
  type: types.FETCH_30_SUCCESS,
  data
});
export const fetch30Failure = (ex) => ({
  type: types.FETCH_30_FAILURE,
  ex
});
export const fetchAllRequest = () => ({
  type: types.FETCH_ALL_REQUEST,
});
export const fetchAllSuccess = (data) => ({
  type: types.FETCH_ALL_SUCCESS,
  data
});
export const fetchAllFailure = (ex) => ({
  type: types.FETCH_ALL_FAILURE,
  ex
});

export const fetch30 = () => (dispatch) => {
  dispatch(fetch30Request());
  return fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
    .then(response => response.json())
    .then(data => dispatch(fetch30Success(data)))
    .catch(ex => dispatch(fetch30Failure(ex)));
};

export const fetchAll = () => (dispatch) => {
  dispatch(fetchAllRequest());
  return fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
    .then(response => response.json())
    .then(data => dispatch(fetchAllSuccess(data)))
    .catch(ex => dispatch(fetchAllFailure(ex)));
};
