import React from 'react';
import { shallow } from 'enzyme';

import { Followers } from '../Followers';

describe('Followers', () => {
  const wrapper = shallow(<Followers />);

  it('has componentDidMount', () => {
    expect(wrapper.instance().componentDidMount).toBeDefined();
  });

  it('has Loader then fetching', () => {
    wrapper.setProps({ isFetching: true });

    expect(wrapper.find('Loader')).toHaveLength(1);
  });

  it('has normal count of Follower', () => {
    const followers = [{}, {}, {}];

    wrapper.setProps({ isFetching: false, followers });

    expect(wrapper.find('Follower')).toHaveLength(followers.length);
  });
});
