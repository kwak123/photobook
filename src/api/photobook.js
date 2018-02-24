import sampleUser from '../../sample-user.json';
import samplePhotos from '../../sample.json';

export default {
  // Stub
  fetchUser() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(sampleUser), 500);
    });
  },
  fetchPhotoList() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(samplePhotos), 500);
    });
  },
};
