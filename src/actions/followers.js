import { createActions } from 'redux-actions';

export const {
  followersRequest,
  followersSuccess,
  followersReject
} = createActions('FOLLOWERS_REQUEST', 'FOLLOWERS_SUCCESS', 'FOLLOWERS_REJECT');
