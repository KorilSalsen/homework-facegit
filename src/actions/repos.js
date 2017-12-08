import { createActions } from 'redux-actions';

export const {
  userReposRequest,
  userReposSuccess,
  userReposFailure
} = createActions(
  'USER_REPOS_REQUEST',
  'USER_REPOS_SUCCESS',
  'USER_REPOS_REJECT'
);
