import user from '@/store/modules/user';

import testAction from './test-action';

describe('userModule', () => {
  describe('state', () => {
    const { state } = user;

    it('should default to avatar, username, first, last, rating, requesting and error', () => {
      const expected = {
        userId: -1,
        avatar: '',
        username: '',
        first: '',
        last: '',
        rating: '',
        requesting: false,
        error: '',
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
      ], true));

      it('should be able to set error', () => testAction(fetchUser, null, {}, [
        { type: 'setUserRequestingStart' },
        { type: 'setUserRequestingComplete' },
        { type: 'setUserError', payload: { error: 'Mock error message' } },
      ], false));
    });
  });

  describe('mutations', () => {
    const { mutations } = user;

    describe('setUser', () => {
      const { setUser } = mutations;

      it('should be able to set matching, excluding rating and changing id to userId', () => {
        const state = {
          userId: -1,
          avatar: '',
          username: '',
          first: '',
          last: '',
          rating: '',
        };
        const testUser = {
          id: 1,
          avatar: 'test avatar',
          username: 'test username',
          first: 'test first',
          last: 'test last',
          rating: '5',
        };
        const expected = {
          userId: 1,
          avatar: 'test avatar',
          username: 'test username',
          first: 'test first',
          last: 'test last',
          rating: '',
        };
        setUser(state, testUser);
        expect(state).toEqual(expected);
      });
    });

    describe('setUserRating', () => {
      const { setUserRating } = mutations;

      it('should be able to set rating on state', () => {
        const state = { rating: '' };
        const test = { rating: '5.0' };
        const expected = { rating: '5.0' };
        setUserRating(state, test);
        expect(state).toEqual(expected);
      });
    });

    describe('setUserRequestingStart', () => {
      const { setUserRequestingStart } = mutations;

      it('should set requesting to true', () => {
        const state = { requesting: false };
        setUserRequestingStart(state);
        expect(state.requesting).toBe(true);
      });
    });

    describe('setUserRequestingComplete', () => {
      const { setUserRequestingComplete } = mutations;

      it('should set requesting to false', () => {
        const state = { requesting: true };
        setUserRequestingComplete(state);
        expect(state.requesting).toBe(false);
      });
    });

    describe('setUserError', () => {
      const { setUserError } = mutations;

      it('should set error message', () => {
        const state = { error: '' };
        setUserError(state, { error: 'test' });
        expect(state.error).toEqual('test');
      });
    });
  });
});
