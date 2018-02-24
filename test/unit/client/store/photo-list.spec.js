import photoListStore from '@/store/modules/photo-list';

describe('photoListStore', () => {
  describe('state', () => {
    const { state } = photoListStore;

    it('should have a default of empty array called photoList', () => {
      expect(state.photoList).toEqual([]);
    });
  });

  describe('mutations', () => {
    const { mutations } = photoListStore;

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

    describe('setPhotoRating', () => {
      const { setPhotoRating } = mutations;

      it('should be able to set photo rating by idx', () => {
        const state = {
          photoList: [
            { rating: 2 },
            { rating: 0 },
          ],
        };
        const testOne = { idx: 0, rating: 5 };
        const testTwo = { idx: 1, rating: 3 };
        setPhotoRating(state, testOne);
        expect(state.photoList[0].rating).toEqual(testOne.rating);
        setPhotoRating(state, testTwo);
        expect(state.photoList[1].rating).toEqual(testTwo.rating);
      });

      it('should ignore out-of-bounds indices', () => {
        const state = {
          photoList: [
            { rating: 2 },
            { rating: 0 },
          ],
        };
        const expected = [{ rating: 2 }, { rating: 0 }];
        setPhotoRating(state, { idx: 10, rating: 5 });
        expect(state.photoList).toEqual(expected);
      });
    });

    describe('setPhotoTitle', () => {
      const { setPhotoTitle } = mutations;

      it('should be able to set photo title by idx', () => {
        const state = {
          photoList: [
            { title: 'Old Title One' },
            { title: 'Old Title Two' },
          ],
        };
        const testOne = { idx: 0, title: 'New Title One' };
        const testTwo = { idx: 1, title: 'New Title Two' };
        setPhotoTitle(state, testOne);
        expect(state.photoList[0].title).toEqual(testOne.title);
        setPhotoTitle(state, testTwo);
        expect(state.photoList[1].title).toEqual(testTwo.title);
      });

      it('should ignore out-of-bounds indices', () => {
        const state = {
          photoList: [
            { title: 'Old Title One' },
            { title: 'Old Title Two' },
          ],
        };
        const expected = [{ title: 'Old Title One' }, { title: 'Old Title Two' }];
        setPhotoTitle(state, { idx: 1000, title: 'That index is like, way off' });
        expect(state.photoList).toEqual(expected);
      });
    });

    describe('setPhotoDescription', () => {
      const { setPhotoDescription } = mutations;

      it('should be able to set photo description by idx', () => {
        const state = {
          photoList: [
            { description: 'Old Description One' },
            { description: 'Old Description Two' },
          ],
        };
        const testOne = { idx: 0, description: 'New Description One' };
        const testTwo = { idx: 1, description: 'New Description Two' };
        setPhotoDescription(state, testOne);
        expect(state.photoList[0].description).toEqual(testOne.description);
        setPhotoDescription(state, testTwo);
        expect(state.photoList[1].description).toEqual(testTwo.description);
      });

      it('should ignore out-of-bounds indices', () => {
        const state = {
          photoList: [
            { description: 'Old Description One' },
            { description: 'Old Description Two' },
          ],
        };
        const expected = [
          { description: 'Old Description One' },
          { description: 'Old Description Two' },
        ];
        setPhotoDescription(state, { idx: 100000, description: 'Are you even trying to guess a good index?' });
        expect(state.photoList).toEqual(expected);
      });
    });
  });

  describe('getters', () => {
    const { getters } = photoListStore;

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
});
