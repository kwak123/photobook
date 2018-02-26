import db from '../../../server/db';

import sampleData from '../../../sample.json';
import sampleUser from '../../../sample-user.json';

describe('db', () => {
  it('should be able to fetch the user', () => {
    expect(db.fetchUser()).toEqual(sampleUser);
  });

  it('should be able to fetch photos by user ID', () => {
    // There's really only one user here, a real db spec would have a testing environment for this
    const userId = db.fetchUser().id;
    expect(db.fetchPhotoList(userId)).toEqual(sampleData[0].photos);
  });

  it('should be able to update a photo based on userId and photoId', () => {
    // This should be expanded to check every possible update param
    db.updatePhoto({ userId: 1, photoId: 1, title: 'Test title' });
    const photos = db.fetchPhotoList(1);
    // Ids start at 1
    expect(photos[0].title).toEqual('Test title');
  });
});
