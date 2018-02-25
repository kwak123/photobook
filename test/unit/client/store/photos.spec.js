import photos from '@/store/modules/photos';
import testAction from './test-action';

describe('photos', () => {
  describe('state', () => {
    const { state } = photos;

    it('should have photoList array, selectedPhoto object, fetching bool, and error string', () => {
      expect(state.photoList).toEqual([]);
      expect(state.selectedPhoto).toEqual({});
      expect(state.fetching).toBe(false);
      expect(state.error).toBe('');
    });
  });

  describe('actions', () => {
    const { actions } = photos;

    describe('fetchPhotoList', () => {
      const { fetchPhotoList } = actions;

      it('should be able to fetch photos', () => testAction(fetchPhotoList, null, {}, [
        { type: 'setFetchingStart' },
        { type: 'setFetchingComplete' },
        { type: 'setPhotoList', payload: { photoList: [] } },
      ], true));

      it('should be able to handle failed photos', () => testAction(fetchPhotoList, null, {}, [
        { type: 'setFetchingStart' },
        { type: 'setFetchingComplete' },
        { type: 'setError', payload: { error: 'Mock error message' } },
      ], false));
    });
  });

  describe('getters', () => {
    const { getters } = photos;

    describe('getPhotosAverage', () => {
      const { getPhotosAverage } = getters;

      it('should be able to return an average rating from a list of photos as a string, to one dec point', () => {
        const state = {
          photoList: [
            { rating: 3 },
            { rating: 5 },
          ],
        };
        // Expect 4.0
        const result = getPhotosAverage(state);
        expect(result).toEqual('4.0');
      });

      it('should return 0.0 if no ratings are available yet', () => {
        const state = { photoList: [] };
        const result = getPhotosAverage(state);
        expect(result).toEqual('0.0');
      });

      it('should ignore ratings of 0 (unrated)', () => {
        const state = {
          photoList: [
            { rating: 3 },
            { rating: 5 },
            { rating: 0 },
          ],
        };
        // Expect 4.0 still
        const result = getPhotosAverage(state);
        expect(result).toEqual('4.0');
      });
    });
  });

  describe('mutations', () => {
    const { mutations } = photos;

    describe('setPhotoList', () => {
      const { setPhotoList } = mutations;

      it('should be able to set photoList array', () => {
        const state = { photoList: [] };
        const expected = [
          { name: 'Testing One' },
          { name: 'Testing Two' },
        ];
        setPhotoList(state, { photoList: expected });
        expect(state.photoList).toEqual(expected);
      });

      it('should do nothing if payload is not an array', () => {
        const state = { photoList: [] };
        const expected = { photoList: [] };
        setPhotoList(state, { photoList: 'this is definitely not valid' });
        expect(state).toEqual(expected);
      });
    });

    describe('setSelectedPhoto', () => {
      const { setSelectedPhoto } = mutations;

      it('should be able to set the selected photo reference by idx', () => {
        const state = {
          photoList: [
            { name: 'Testing One' },
            { name: 'Testing Two' },
          ],
          selectedPhoto: {},
        };
        setSelectedPhoto(state, { idx: 0 });
        expect(state.selectedPhoto).toBe(state.photoList[0]);
      });
    });

    describe('setPhotoRating', () => {
      const { setPhotoRating } = mutations;

      it('should be able to set photo rating', () => {
        const state = {
          selectedPhoto: {
            rating: 0,
          },
        };
        const testOne = { rating: 5 };
        const testTwo = { idx: 1, rating: 3 };
        setPhotoRating(state, testOne);
        expect(state.selectedPhoto.rating).toEqual(testOne.rating);
        setPhotoRating(state, testTwo);
        expect(state.selectedPhoto.rating).toEqual(testTwo.rating);
      });
    });

    describe('setPhotoTitle', () => {
      const { setPhotoTitle } = mutations;

      it('should be able to set photo title by idx', () => {
        const state = {
          selectedPhoto: {
            title: '',
          },
        };
        const testOne = { title: 'New Title One' };
        const testTwo = { title: 'New Title Two' };
        setPhotoTitle(state, testOne);
        expect(state.selectedPhoto.title).toEqual(testOne.title);
        setPhotoTitle(state, testTwo);
        expect(state.selectedPhoto.title).toEqual(testTwo.title);
      });
    });

    describe('setPhotoDescription', () => {
      const { setPhotoDescription } = mutations;

      it('should be able to set photo description by idx', () => {
        const state = {
          selectedPhoto: {
            description: 0,
          },
        };
        const testOne = { description: 'New Description One' };
        const testTwo = { description: 'New Description Two' };
        setPhotoDescription(state, testOne);
        expect(state.selectedPhoto.description).toEqual(testOne.description);
        setPhotoDescription(state, testTwo);
        expect(state.selectedPhoto.description).toEqual(testTwo.description);
      });
    });

    describe('setFetchingStart', () => {
      const { setFetchingStart } = mutations;

      it('should set fetching to true', () => {
        const state = { fetching: false };
        setFetchingStart(state);
        expect(state.fetching).toBe(true);
      });
    });

    describe('setFetchingComplete', () => {
      const { setFetchingComplete } = mutations;

      it('should set fetching to false', () => {
        const state = { fetching: true };
        setFetchingComplete(state);
        expect(state.fetching).toBe(false);
      });
    });

    describe('setError', () => {
      const { setError } = mutations;

      it('should be able to set error string from error object message property', () => {
        const state = { error: '' };
        setError(state, { error: 'Mock error' });
        expect(state.error).toEqual('Mock error');
      });
    });
  });
});
