import { call, put } from 'redux-saga/effects';

import { followersSuccess, followersReject } from '../../actions/followers';
import { followersSaga } from '../followers';
import { getUserFollowers } from '../../api';
import requestFlow from '../request';

describe('Saga followers:', () => {
  it('call getUserFollowers', () => {
    const action = { payload: 'test_login' };
    const saga = followersSaga(action);

    expect(saga.next().value).toEqual(
      call(requestFlow, getUserFollowers, 'test_login')
    );
  });

  it('dispatch action followersSuccess with user from call on success call', () => {
    const action = { payload: 'test_login' };
    const saga = followersSaga(action);
    const followers = { data: ['test_fillower'] };

    saga.next();
    expect(saga.next(followers).value).toEqual(
      put(followersSuccess(followers.data))
    );
  });

  it('dispatch action followersReject with user from call on success call', () => {
    const action = { payload: 'test_login' };
    const saga = followersSaga(action);
    const error = new Error('test error');

    saga.next();
    expect(saga.throw(error).value).toEqual(put(followersReject(error)));
  });
});
