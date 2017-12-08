import { handleActions } from 'redux-actions';

import {
  followersRequest,
  followersSuccess,
  followersReject
} from '../actions/followers';

const initialState = {
  isFetching: false,
  isFetched: false,
  followers: [],
  error: null
};

export default handleActions(
  {
    [followersRequest]: (state, action) => ({
      ...state,
      isFetching: true,
      isFetched: false,
      followers: [],
      error: null
    }),
    [followersSuccess]: (state, action) => ({
      ...state,
      isFetching: false,
      isFetched: true,
      followers: action.payload,
      error: null
    }),
    [followersReject]: (state, action) => ({
      ...state,
      isFetching: false,
      isFetched: true,
      followers: [],
      error: action.payload
    })
  },
  initialState
);
