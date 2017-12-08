import { call, put, takeEvery } from 'redux-saga/effects';

import { getUserInformation, getTokenOwner } from '../api';
import requestFlow from './request';
import {
  usersRequest,
  usersSuccess,
  usersReject,
  tokenOwnerRequest
} from '../actions/users';

export function* userSaga(action) {
  try {
    let user;
    if (action.type === usersRequest.toString()) {
      user = yield call(requestFlow, getUserInformation, action.payload);
    } else if (action.type === tokenOwnerRequest.toString()) {
      user = yield call(requestFlow, getTokenOwner, action.payload);
    }

    yield put(usersSuccess(user.data));
  } catch (error) {
    yield put(usersReject(error));
  }
}

export function* fetchUserWatch() {
  yield takeEvery([usersRequest, tokenOwnerRequest], userSaga);
}
