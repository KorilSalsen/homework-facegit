import {
  followersRequest,
  followersSuccess,
  followersReject
} from '../../actions/followers';
import reducer from '../followers';

describe('followers reducer', () => {
  it('request', () => {
    const state = {
      isFetching: false,
      isFetched: false,
      followers: ['test_follower'],
      error: {}
    };
    const action = followersRequest();

    expect(reducer(state, action)).toEqual({
      isFetching: true,
      isFetched: false,
      followers: [],
      error: null
    });
  });

  it('success', () => {
    const state = {
      isFetching: true,
      isFetched: false,
      followers: [],
      error: {}
    };
    const action = followersSuccess(['test_follower']);

    expect(reducer(state, action)).toEqual({
      isFetching: false,
      isFetched: true,
      followers: ['test_follower'],
      error: null
    });
  });

  it('reject', () => {
    const state = {
      isFetching: true,
      isFetched: false,
      followers: ['test_follower'],
      error: null
    };
    const action = followersReject({ message: 'test' });

    expect(reducer(state, action)).toEqual({
      isFetching: false,
      isFetched: true,
      followers: [],
      error: { message: 'test' }
    });
  });
});
