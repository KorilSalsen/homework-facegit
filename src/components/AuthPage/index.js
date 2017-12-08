import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './styles.css';
import { authorize } from '../../actions/auth';

class AuthPage extends Component {
  state = {
    token: ''
  };

  handleChange = e => {
    this.setState({
      token: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { authorize } = this.props;
    const { token } = this.state;

    if (token) {
      authorize(token);
    }
  };

  render() {
    const { authorized } = this.props;
    const { token } = this.state;

    return (
      <div className="auth">
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            className="field"
            type="text"
            placeholder="Token"
            value={token}
            onChange={this.handleChange}
          />
          <button className="btn">Set</button>
        </form>
        {authorized && <Redirect to="/" />}
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.auth });

const mapDispatchToProps = { authorize };

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
