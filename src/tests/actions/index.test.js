import * as types from '../../constants/ActionTypes';
import * as actions from '../../actions';

describe('actions', () => {
  it('fetch30Request should create FETCH_30_REQUEST action', () => {
    expect(actions.fetch30Request()).toEqual({
      type: types.FETCH_30_REQUEST,
    });
  });
});
