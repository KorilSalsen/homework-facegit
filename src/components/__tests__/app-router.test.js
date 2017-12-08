import React from 'react';
import { shallow } from 'enzyme';
import { Switch, Route, Redirect } from 'react-router-dom';

import { AppRouter } from '../AppRouter';
import PrivateRoute from '../PrivateRoute';

describe('AppRouter', () => {
  const wrapper = shallow(<AppRouter />);

  it('contains Switch', () => {
    expect(wrapper.find(Switch)).toHaveLength(1);
  });

  it('contains PrivateRoute', () => {
    expect(wrapper.find(PrivateRoute)).toHaveLength(2);
    expect(wrapper.find(PrivateRoute).get(0).props.path).toEqual('/user/me');
    expect(wrapper.find(PrivateRoute).get(1).props.path).toEqual('/user/:name');
  });

  it('contains Route to /login', () => {
    expect(wrapper.find(Route).props().path).toEqual('/login');
  });

  it('contains Redirect to /user/me', () => {
    expect(wrapper.find(Redirect).props().to).toEqual('/user/me');
  });

  it('contains logout button', () => {
    wrapper.setProps({ authorized: true });

    expect(wrapper.find('button.logout')).toHaveLength(1);
  });

  it('contains network error', () => {
    wrapper.setProps({ networkError: true });

    expect(wrapper.find('.error')).toHaveLength(1);
  });
});
