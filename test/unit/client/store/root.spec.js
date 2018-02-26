import root from '@/store/modules/root';

import testAction from './test-action';

describe('rootModule', () => {
  describe('actions', () => {
    const { actions } = root;

    describe('start', () => {
      const { start } = actions;

      it('should dispatch fetchUser, fetchPhotoList, then commit setUserRating', () => {
        const expectedDispatch = [
          { type: 'fetchUser' },
          { type: 'fetchPhotoList', payload: { userId: 1 } },
        ];
        let count = 0;
        const dispatch = (actionType, actionPayload) => new Promise((resolve) => {
          const dispatched = expectedDispatch[count];
          expect(actionType).toEqual(dispatched.type);
          if (actionPayload) {
            expect(actionPayload).toEqual(dispatched.payload);
          }
          count += 1;
          resolve();
        });
        const context = {
          dispatch,
          rootState: { user: { userId: 1 } },
          rootGetters: {
            getPhotosAverage: 1,
          },
        };
        return testAction(start, null, context, [
          { type: 'setUserRating', payload: { rating: 1 } },
        ], true);
      });
    });

    describe('updateRating', () => {
      const { updateRating } = actions;

      it('should commit setPhotoRating then setUserRating', () => {
        const payload = { rating: 1 };
        const context = {
          rootGetters: {
            getPhotosAverage: 1,
          },
        };
        return testAction(updateRating, payload, context, [
          { type: 'setPhotoRating', payload: { rating: 1 } },
          { type: 'setUserRating', payload: { rating: 1 } },
        ], true);
      });
    });
  });
});
