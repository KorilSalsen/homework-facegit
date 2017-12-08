import { handleActions } from 'redux-actions';

import { authorize, logout } from '../actions/auth';

const initialState = {
  token: null,
  authorized: false
};

export default handleActions(
  {
    [authorize]: (state, action) => ({
      ...state,
      authorized: true,
      token: action.payload
    }),
    [logout]: (state, action) => ({ ...state, token: null, authorized: false })
  },
  initialState
);

export const getIsAuthorized = state => state.auth.authorized;
