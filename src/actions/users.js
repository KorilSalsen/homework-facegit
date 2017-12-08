import { createActions } from 'redux-actions';

export const { usersRequest, usersSuccess, usersReject } = createActions(
  'USERS_REQUEST',
  'USERS_SUCCESS',
  'USERS_REJECT'
);

export const { tokenOwnerRequest } = createActions('TOKEN_OWNER_REQUEST');
