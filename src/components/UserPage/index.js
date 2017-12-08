import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles.css';
import { usersRequest, tokenOwnerRequest } from '../../actions/users';
import Followers from '../Followers';
import Loader from '../Loader';

export class Follower extends Component {
  componentDidMount() {
    const { usersRequest, tokenOwnerRequest, match } = this.props;

    if (match) {
      const { params: { name } } = match;

      if (name) {
        usersRequest(name);
      } else {
        tokenOwnerRequest();
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    const { usersRequest, tokenOwnerRequest, match } = this.props;
    const { match: nextMatch } = nextProps;

    if (match && nextMatch) {
      const { params: { name } } = match;
      const { params: { name: nextName } } = nextMatch;

      if (name !== nextName) {
        if (nextName) {
          usersRequest(nextName);
        } else {
          tokenOwnerRequest();
        }
      }
    }
  }

  render() {
    const { user, isFetching, isFetched } = this.props;

    if (isFetching) {
      return <Loader />;
    } else if (user) {
      const { login, avatar_url, followers, public_repos } = user;

      return (
        <div className="user">
          <div className="col">
            <h1 className="title login">User: {login}</h1>
            <img className="avatar" src={avatar_url} alt={login} />
            <div className="stat followers-stat">
              <b>Followers:</b> {followers}
            </div>
            <div className="stat repos-stat">
              <b>Public repos:</b> {public_repos}
            </div>
          </div>
          <div className="col">
            <h2 className="title">Followers:</h2>
            <Followers login={login} />
          </div>
        </div>
      );
    } else if (isFetched) {
      return <h1 className="title">User not found</h1>;
    }

    return null;
  }
}

const mapStateToProps = state => ({ ...state.users });

const mapDispatchToProps = {
  usersRequest,
  tokenOwnerRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Follower);
