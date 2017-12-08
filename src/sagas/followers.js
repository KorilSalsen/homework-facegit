import { call, put, takeEvery } from 'redux-saga/effects';

import { getUserFollowers } from '../api';
import requestFlow from './request';
import {
  followersRequest,
  followersSuccess,
  followersReject
} from '../actions/followers';

export function* followersSaga(action) {
  try {
    const followers = yield call(requestFlow, getUserFollowers, action.payload);

    yield put(followersSuccess(followers.data));
  } catch (error) {
    yield put(followersReject(error));
  }
}

export function* fetchFollowersWatch() {
  yield takeEvery(followersRequest, followersSaga);
}
