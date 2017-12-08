import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './styles.css';
import PrivateRoute from '../PrivateRoute';
import AuthPage from '../AuthPage';
import UserPage from '../UserPage';
import { logout } from '../../actions/auth';
import { getIsAuthorized } from '../../reducers/auth';
import {
  getIsNetworkErrorPresent,
  getNetworkError
} from '../../reducers/network';

export class AppRouter extends Component {
  handleLogout = () => {
    this.props.logout();
  };

  render() {
    const { authorized, networkError, errorMessage } = this.props;

    return (
      <div className="container">
        {authorized && (
          <button className="logout" onClick={this.handleLogout}>
            Logout
          </button>
        )}
        {networkError && <div className="error">{errorMessage}</div>}
        <Switch>
          <PrivateRoute path="/user/me" component={UserPage} />
          <PrivateRoute path="/user/:name" component={UserPage} />
          <Route path="/login" exact component={AuthPage} />
          <Redirect to="/user/me" />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authorized: getIsAuthorized(state),
  networkError: getIsNetworkErrorPresent(state),
  errorMessage: getNetworkError(state)
});

const mapDispatchToProps = { logout };

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AppRouter)
);
