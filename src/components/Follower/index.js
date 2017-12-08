import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default class Follower extends Component {
  render() {
    const { follower: { login, avatar_url } } = this.props;

    return (
      <div className="follower">
        <Link className="link" to={`/user/${login}`}>
          {login}
        </Link>
        <Link className="avatar-link" to={`/user/${login}`}>
          <img className="avatar" src={avatar_url} alt={login} />
        </Link>
      </div>
    );
  }
}
