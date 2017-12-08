import { handleActions } from 'redux-actions';

import {
  usersRequest,
  usersSuccess,
  usersReject,
  tokenOwnerRequest
} from '../actions/users';

const initialState = {
  isFetching: false,
  isFetched: false,
  error: null,
  user: null
};

export default handleActions(
  {
    [usersRequest]: (state, action) => ({
      ...state,
      isFetching: true,
      isFetched: false,
      error: null,
      user: null
    }),
    [usersSuccess]: (state, action) => ({
      ...state,
      isFetching: false,
      isFetched: true,
      error: null,
      user: action.payload
    }),
    [usersReject]: (state, action) => ({
      ...state,
      isFetching: false,
      isFetched: true,
      error: action.payload,
      user: null
    }),
    [tokenOwnerRequest]: (state, action) => ({
      ...state,
      isFetching: true,
      isFetched: false,
      error: null,
      user: null
    })
  },
  initialState
);
