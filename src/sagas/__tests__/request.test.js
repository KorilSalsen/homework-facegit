import { call, put, select } from 'redux-saga/effects';

import { clearNetworkErrors, networkError } from '../../actions/network';
import { logout } from '../../actions/auth';
import { getIsNetworkErrorPresent } from '../../reducers/network';
import requestFlow from '../request';

describe('Saga followers:', () => {
  describe('Сценарий без ошибки', () => {
    const mockFn = jest.fn();
    const action = { payload: 'test_login' };
    const saga = requestFlow(mockFn, action);

    it('1. Эффект call fn, action', () => {
      expect(saga.next().value).toEqual(call(mockFn, action));
    });

    it('2. Эффект select getIsNetworkErrorPresent', () => {
      expect(saga.next().value).toEqual(select(getIsNetworkErrorPresent));
    });
  });

  describe('Сценарий с ошибкой', () => {
    const mockFn = jest.fn();
    const action = { payload: 'test_login' };
    const saga = requestFlow(mockFn, action);

    it('1. Эффект call fn, action', () => {
      expect(saga.next().value).toEqual(call(mockFn, action));
    });

    it('2. Эффект put networkError', () => {
      const error = { response: { status: 401 } };

      expect(saga.throw(error).value).toEqual(put(networkError(error)));
    });

    it('3. Эффект put logout', () => {
      expect(saga.next().value).toEqual(put(logout()));
    });
  });

  describe('Сценарий после ошибки', () => {
    const mockFn = jest.fn();
    const action = { payload: 'test_login' };
    const saga = requestFlow(mockFn, action);

    it('1. Эффект call fn, action', () => {
      expect(saga.next().value).toEqual(call(mockFn, action));
    });

    it('2. Эффект select getIsNetworkErrorPresent', () => {
      expect(saga.next().value).toEqual(select(getIsNetworkErrorPresent));
    });

    it('3. Эффект put clearNetworkErrors', () => {
      expect(saga.next(true).value).toEqual(put(clearNetworkErrors()));
    });
  });
});
