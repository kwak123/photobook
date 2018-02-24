import photobook from '@/api/photobook';

describe('photobookApi', () => {
  describe('getUser', () => {
    const { getUser } = photobook;

    it('should be able to return a user object', () => getUser().then((user) => {
      expect(typeof user).toEqual('object');
      expect(user).toBeTruthy();
    }));
  });

  describe('getPhotos', () => {
    const { getPhotos } = photobook;

    it('should be able to return a list of photos', () =>getPhotos().then((photos) => {
      expect(Array.isArray(photos)).toBeTruthy();
    }));
  });
});
