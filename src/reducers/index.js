import { combineReducers } from 'redux';

import auth from './auth';
import users from './users.js';
import followers from './followers';
import network from './network';

export default combineReducers({
  auth,
  users,
  followers,
  network
});
