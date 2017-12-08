import { call, put } from 'redux-saga/effects';

import {
  usersSuccess,
  usersReject,
  usersRequest,
  tokenOwnerRequest
} from '../../actions/users';
import { userSaga } from '../users';
import { getUserInformation, getTokenOwner } from '../../api';
import requestFlow from '../request';

describe('Saga users:', () => {
  it('call getTokenOwnerr', () => {
    const action = tokenOwnerRequest('test_login');
    const saga = userSaga(action);

    expect(saga.next().value).toEqual(
      call(requestFlow, getTokenOwner, 'test_login')
    );
  });

  it('call getUserInformation', () => {
    const action = usersRequest('test_login');
    const saga = userSaga(action);

    expect(saga.next().value).toEqual(
      call(requestFlow, getUserInformation, 'test_login')
    );
  });

  it('dispatch action usersSuccess with user from call on success call', () => {
    const action = usersRequest('test_login');
    const user = { data: { login: 'test', id: '1' } };
    const saga = userSaga(action);

    saga.next();
    expect(saga.next(user).value).toEqual(put(usersSuccess(user.data)));
  });

  it('dispatch action usersReject with user from call on success call', () => {
    const action = usersRequest('test_login');
    const error = new Error('test error');
    const saga = userSaga(action);

    saga.next();
    expect(saga.throw(error).value).toEqual(put(usersReject(error)));
  });
});
