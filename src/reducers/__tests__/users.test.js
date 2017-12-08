import { usersRequest, usersSuccess, usersReject } from '../../actions/users';
import reducer from '../users';

describe('users reducer', () => {
  it('request', () => {
    const state = {
      isFetching: false,
      isFetched: false,
      user: {},
      error: {}
    };
    const action = usersRequest();

    expect(reducer(state, action)).toEqual({
      isFetching: true,
      isFetched: false,
      user: null,
      error: null
    });
  });

  it('success', () => {
    const state = {
      isFetching: true,
      isFetched: false,
      user: {},
      error: {}
    };
    const action = usersSuccess({ login: 'test' });

    expect(reducer(state, action)).toEqual({
      isFetching: false,
      isFetched: true,
      user: { login: 'test' },
      error: null
    });
  });

  it('reject', () => {
    const state = {
      isFetching: true,
      isFetched: false,
      user: {},
      error: null
    };
    const action = usersReject({ message: 'test' });

    expect(reducer(state, action)).toEqual({
      isFetching: false,
      isFetched: true,
      user: null,
      error: { message: 'test' }
    });
  });
});
