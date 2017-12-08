import React, { Component } from 'react';
import nanoid from 'nanoid';
import { connect } from 'react-redux';

import './styles.css';
import Follower from '../Follower';
import Loader from '../Loader';
import { followersRequest } from '../../actions/followers';

export class Followers extends Component {
  componentDidMount() {
    const { followersRequest, login } = this.props;

    followersRequest && followersRequest(login);
  }

  renderFollowers = () => {
    const { followers } = this.props;

    return (
      followers &&
      followers.map(follower => <Follower key={nanoid()} follower={follower} />)
    );
  };

  render() {
    const { isFetching } = this.props;

    if (isFetching) {
      return <Loader />;
    }

    return <div className="followers">{this.renderFollowers()}</div>;
  }
}

const mapStateToProps = state => ({ ...state.followers });

const mapDispatchToProps = { followersRequest };

export default connect(mapStateToProps, mapDispatchToProps)(Followers);
