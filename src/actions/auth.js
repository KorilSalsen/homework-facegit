import { createActions } from 'redux-actions';

export const { setToken, authorize, logout } = createActions(
  'AUTHORIZE',
  'LOGOUT'
);
