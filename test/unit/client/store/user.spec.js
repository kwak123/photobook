import user from '@/store/modules/user';

import testAction from './test-action';

describe('userModule', () => {
  describe('state', () => {
    const { state } = user;

    it('should have a default of avatar, username, first, last, rating, and requesting', () => {
      const expected = {
        avatar: '',
        username: '',
        first: '',
        last: '',
        rating: '',
        requesting: false,
      };
      expect(state).toEqual(expected);
    });
  });

  describe('actions', () => {
    const { actions } = user;

    describe('fetchUser', () => {
      const { fetchUser } = actions;

      it('should be able to fetch user', () => testAction(fetchUser, null, {}, [
        { type: 'setUserRequestingStart' },
        { type: 'setUserRequestingComplete' },
        { type: 'setUser', payload: {/* Mock user data */} },
      ]), true);
    });
  });

  describe('mutations', () => {
    const { mutations } = user;

    describe('setUser', () => {
      const { setUser } = mutations;

      it('should be able to set user with matching params, excluding rating and nonmatched', () => {
        const state = {
          avatar: '',
          username: '',
          first: '',
          last: '',
          rating: '',
        };
        const testUser = {
          avatar: 'test avatar',
          username: 'test username',
          first: 'test first',
          last: 'test last',
          rating: '5',
        };
        const expected = { ...testUser, rating: '' };
        setUser(state, testUser);
        expect(state).toEqual(expected);
      });
    });

    describe('setRating', () => {
      const { setRating } = mutations;

      it('should be able to set rating on state', () => {
        const state = { rating: '' };
        const test = { rating: '5.0' };
        const expected = { rating: '5.0' };
        setRating(state, test);
        expect(state).toEqual(expected);
      });
    });
  });
});
