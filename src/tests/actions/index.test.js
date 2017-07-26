import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
// import fetch from 'isomorphic-fetch';

import * as types from '../../constants/ActionTypes';
import * as actions from '../../actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetch30 actions', () => {
  it('fetch30Request creates FETCH_30_REQUEST action', () => {
    expect(actions.fetch30Request()).toEqual({
      type: types.FETCH_30_REQUEST,
    });
  });
  it('fetch30Success creates FETCH_30_SUCCESS action', () => {
    const body = {name: 'Bobby', score: 300};

    expect(actions.fetch30Success(body)).toEqual({
      type: types.FETCH_30_SUCCESS,
      body
    });
  });
  it('fetch30Failure creates FETCH_30_FAILURE action', () => {
    const ex = {type: 'exception'};

    expect(actions.fetch30Failure(ex)).toEqual({
      type: types.FETCH_30_FAILURE,
      ex
    });
  });
});

describe('fetchAll actions', () => {
  it('fetchAllRequest creates FETCH_ALL_REQUEST action', () => {
    expect(actions.fetchAllRequest()).toEqual({
      type: types.FETCH_ALL_REQUEST,
    });
  });
  it('fetchAllSuccess creates FETCH_ALL_SUCCESS action', () => {
    const body = {name: 'Bobby', score: 300};

    expect(actions.fetchAllSuccess(body)).toEqual({
      type: types.FETCH_ALL_SUCCESS,
      body
    });
  });
  it('fetchAllFailure creates FETCH_ALL_FAILURE action', () => {
    const ex = {type: 'exception'};

    expect(actions.fetchAllFailure(ex)).toEqual({
      type: types.FETCH_ALL_FAILURE,
      ex
    });
  });
});

describe('async fetch30 action', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('creates FETCH_30_SUCCESS when fetching has been done', () => {
    nock('https://fcctop100.herokuapp.com/api/fccusers/top/')
      .get('/recent')
      .reply(200, { body: [{username: 'SkyC0der'}, {username: 'sjames1958gm'}] });

    const expectedActions = [
      { type: types.FETCH_30_REQUEST },
      { type: types.FETCH_30_SUCCESS, body: [{username: 'SkyC0der'}, {username: 'sjames1958gm'}] },
    ];

    const store = mockStore({ score30days: [] });

    return store.dispatch(actions.fetch30()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('async fetchAll action', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('creates FETCH_ALL_SUCCESS when fetching has been done', () => {
    nock('https://fcctop100.herokuapp.com/api/fccusers/top/')
      .get('/alltime')
      .reply(200, { body: [{username: 'sjames1958gm'}, {username: 'Manish-Giri'}] });

    const expectedActions = [
      { type: types.FETCH_ALL_REQUEST },
      { type: types.FETCH_ALL_SUCCESS, body: [{username: 'sjames1958gm'}, {username: 'Manish-Giri'}] },
    ];

    const store = mockStore({ scoreAlldays: [] });

    return store.dispatch(actions.fetchAll()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
