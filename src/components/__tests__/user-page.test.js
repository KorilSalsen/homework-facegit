import React from 'react';
import { shallow } from 'enzyme';

import { Follower } from '../UserPage';
import Followers from '../Followers';

describe('UserPage', () => {
  const wrapper = shallow(<Follower />);

  it('has componentDidMount', () => {
    expect(wrapper.instance().componentDidMount).toBeDefined();
  });

  it('has componentWillReceiveProps', () => {
    expect(wrapper.instance().componentWillReceiveProps).toBeDefined();
  });

  it('has Loader then fetching', () => {
    wrapper.setProps({ isFetching: true });

    expect(wrapper.find('Loader')).toHaveLength(1);
  });

  it('has has message then no user', () => {
    wrapper.setProps({ isFetching: false, isFetched: true, user: null });

    expect(
      wrapper.contains(<h1 className="title">User not found</h1>)
    ).toBeTruthy();
  });

  describe('has avatar, login, followers count and Followers with prop login', () => {
    it('has avatar', () => {
      wrapper.setProps({ user: { avatar_url: 'test' } });

      expect(wrapper.find('.avatar').props().src).toEqual('test');
    });

    it('has login', () => {
      wrapper.setProps({ user: { login: 'test' } });

      expect(wrapper.find('.login').contains('test')).toBeTruthy();
    });

    it('has followers count', () => {
      wrapper.setProps({ user: { followers: 55 } });

      expect(wrapper.find('.followers-stat').contains(55)).toBeTruthy();
    });

    it('has Followers with prop login', () => {
      wrapper.setProps({ user: { login: 'test' } });

      expect(wrapper.find(Followers).props().login).toEqual('test');
    });
  });
});
