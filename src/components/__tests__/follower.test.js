import React from 'react';
import { shallow } from 'enzyme';

import Follower from '../Follower';

describe('Follower', () => {
  const wrapper = shallow(<Follower follower={{}} />);

  it('has avatar', () => {
    wrapper.setProps({ follower: { avatar_url: 'test' } });

    expect(wrapper.find('.avatar').props().src).toEqual('test');
  });

  it('has login in props', () => {
    wrapper.setProps({ follower: { login: 'test' } });

    expect(wrapper.instance().props.follower.login).toEqual('test');
  });

  it('has link with login', () => {
    wrapper.setProps({ follower: { login: 'test' } });

    expect(wrapper.find('.link').props().to).toEqual('/user/test');
  });
});
