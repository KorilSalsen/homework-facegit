import React, { PureComponent } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { getIsAuthorized } from '../../reducers/auth';

class PrivateRoute extends PureComponent {
  render() {
    const { authorized, component: Component, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={props =>
          authorized ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    );
  }
}

export default connect(state => ({
  authorized: getIsAuthorized(state)
}))(PrivateRoute);
