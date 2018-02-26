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

    it('should be able to return a list of photos based on user id', () => {
      const userId = 1;
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        expect(request.config.method).toEqual('get');
        expect(request.config.url).toEqual('/api/photos');
        expect(request.config.params).toEqual({ userId });
        request.respondWith({ status: 200, response: [/* Mock photo data */] });
      });
      return fetchPhotoList(userId).then((photos) => {
        expect(photos).toEqual([]);
      });
    });
  });

  describe('postPhotoUpdate', () => {
    const { postPhotoUpdate } = photobook;

    it('should be able to post photo updates', () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        expect(request.url).toEqual('/api/photos/update');
        expect(request.config.method).toEqual('post');
        request.respondWith({ status: 200 });
      });

      return postPhotoUpdate({});
    });

    it('should only pass along id, title, rating, and description', () => {
      const expected = {
        id: 1,
        title: 'test',
        rating: 'test',
        description: 'test',
      };

      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        expect(JSON.parse(request.config.data)).toEqual(expected);
        request.respondWith({ status: 200 });
      });

      return postPhotoUpdate({
        ...expected,
        unused: 'this should not be in moxios',
      });
    });
  });
});
