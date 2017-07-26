import * as types from '../constants/ActionTypes';
import fetch from 'isomorphic-fetch';

const urls = [
  'https://fcctop100.herokuapp.com/api/fccusers/top/recent',
  'https://fcctop100.herokuapp.com/api/fccusers/top/alltime',
];

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

export const fetch30 = () => (dispatch) => {
  dispatch(fetch30Request());
  return fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
    .then(response => response.json())
    .then(json => dispatch(fetch30Success(json.body)))
    .catch(ex => dispatch(fetch30Failure(ex)));
};
