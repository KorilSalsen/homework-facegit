import { networkError, clearNetworkErrors } from '../../actions/network';
import { error, message } from '../network';

describe('network reducer', () => {
  describe('error', () => {
    it('set error', () => {
      const action = networkError(true);

      expect(error(null, action)).toEqual(true);
    });

    it('clear error', () => {
      const action = clearNetworkErrors();

      expect(error(null, action)).toEqual(null);
    });
  });

  describe('message', () => {
    it('set error', () => {
      const action = networkError({
        response: { data: { message: 'test error' } }
      });

      expect(message(null, action)).toEqual('test error');
    });

    it('clear error', () => {
      const action = clearNetworkErrors();

      expect(message(null, action)).toEqual(null);
    });
  });
});
