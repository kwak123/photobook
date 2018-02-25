import user from '@/store/modules/user';

describe('userModule', () => {
  describe('state', () => {
    const { state } = user;

    it('should have a default state with avatar, username, first, last, and rating', () => {
      const expected = {
        avatar: '',
        username: '',
        first: '',
        last: '',
        rating: '',
      };
      expect(state).toEqual(expected);
    });
  });

  describe('actions', () => {
    const { actions } = user;

    const commit = (type, payload) => {
      expect(type).toEqual('setUser');
      expect(payload).toBeTruthy();
    };

    describe('fetchUser', () => {
      const { fetchUser } = actions;
      xit('should be able to fetch a user and commit mutation', () => fetchUser({ commit }));
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
