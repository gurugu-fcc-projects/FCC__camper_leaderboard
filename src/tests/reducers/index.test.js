import reducer from '../../reducers/index';
import * as types from '../../constants/ActionTypes';

describe('reducer', () => {
  const initial_state = {
    isRequesting: false,
    errorMessage: '',
    show30days: true,
    receivedData: [],
  };

  it('handles initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initial_state);
  });

  it('handles FETCH_30_REQUEST', () => {
    expect(
      reducer({}, {
        type: types.FETCH_30_REQUEST,
      })
    ).toEqual({
      isRequesting: true,
    });
  });

  it('handles FETCH_30_SUCCESS', () => {
    expect(
      reducer({}, {
        type: types.FETCH_30_SUCCESS,
        data: [{name: 'Bobby', score: 300}],
      })
    ).toEqual({
      receivedData: [{name: 'Bobby', score: 300}],
    });
  });

  it('handles FETCH_30_FAILURE', () => {
    expect(
      reducer({}, {
        type: types.FETCH_30_FAILURE,
        ex: {message: 'Error'},
      })
    ).toEqual({
      errorMessage: 'Error',
    });
  });

  it('handles FETCH_ALL_REQUEST', () => {
    expect(
      reducer({}, {
        type: types.FETCH_ALL_REQUEST,
      })
    ).toEqual({
      isRequesting: true,
    });
  });

  it('handles FETCH_ALL_SUCCESS', () => {
    expect(
      reducer({}, {
        type: types.FETCH_ALL_SUCCESS,
        data: [{name: 'Bobby', score: 300}],
      })
    ).toEqual({
      receivedData: [{name: 'Bobby', score: 300}],
    });
  });

  it('handles FETCH_ALL_FAILURE', () => {
    expect(
      reducer({}, {
        type: types.FETCH_ALL_FAILURE,
        ex: {message: 'Error'},
      })
    ).toEqual({
      errorMessage: 'Error',
    });
  });

});
