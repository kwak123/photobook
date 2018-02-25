import moxios from 'moxios';
import photobook from '@/api/photobook';

describe('photobookApi', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  describe('fetchUser', () => {
    const { fetchUser } = photobook;

    it('should be able to return a user object', () => {
      moxios.stubRequest('/api/user', { status: 200, response: { /* Mock user data */ } });
      return fetchUser().then((user) => {
        expect(user).toEqual({ /* Mock user data */ });
        expect(user).toBeTruthy();
      });
    });
  });

  describe('fetchPhotoList', () => {
    const { fetchPhotoList } = photobook;

    it('should be able to return a list of photos', () => {
      moxios.stubRequest('/api/photos', { status: 200, response: [/* Mock photos */] });
      return fetchPhotoList().then((photos) => {
        expect(photos).toEqual([]);
      });
    });
  });
});
