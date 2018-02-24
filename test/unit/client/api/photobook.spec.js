import photobook from '@/api/photobook';

describe('photobookApi', () => {
  describe('fetchUser', () => {
    const { fetchUser } = photobook;

    it('should be able to return a user object', () => fetchUser().then((user) => {
      expect(typeof user).toEqual('object');
      expect(user).toBeTruthy();
    }));
  });

  describe('fetchPhotos', () => {
    const { fetchPhotos } = photobook;

    it('should be able to return a list of photos', () => fetchPhotos().then((photos) => {
      expect(Array.isArray(photos)).toBeTruthy();
    }));
  });
});
