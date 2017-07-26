import * as types from '../../constants/ActionTypes';
import * as actions from '../../actions';

describe('fetch30 actions', () => {
  it('fetch30Request should create FETCH_30_REQUEST action', () => {
    expect(actions.fetch30Request()).toEqual({
      type: types.FETCH_30_REQUEST,
    });
  });
  it('fetch30Success should create FETCH_30_SUCCESS action', () => {
    const body = {name: 'Bobby', score: 300};

    expect(actions.fetch30Success(body)).toEqual({
      type: types.FETCH_30_SUCCESS,
      body
    });
  });
  it('fetch30Failure should create FETCH_30_FAILURE action', () => {
    const ex = {type: 'exception'};

    expect(actions.fetch30Failure(ex)).toEqual({
      type: types.FETCH_30_FAILURE,
      ex
    });
  });
});

describe('fetchAll actions', () => {
  it('fetchAllRequest should create FETCH_ALL_REQUEST action', () => {
    expect(actions.fetchAllRequest()).toEqual({
      type: types.FETCH_ALL_REQUEST,
    });
  });
  it('fetchAllSuccess should create FETCH_ALL_SUCCESS action', () => {
    const body = {name: 'Bobby', score: 300};

    expect(actions.fetchAllSuccess(body)).toEqual({
      type: types.FETCH_ALL_SUCCESS,
      body
    });
  });
  it('fetchAllFailure should create FETCH_ALL_FAILURE action', () => {
    const ex = {type: 'exception'};

    expect(actions.fetchAllFailure(ex)).toEqual({
      type: types.FETCH_ALL_FAILURE,
      ex
    });
  });
});
