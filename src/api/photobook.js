import sampleUser from '../../sample-user.json';
import samplePhotos from '../../sample.json';

export default {
  // Stub
  fetchUser() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(sampleUser), 500);
    });
  },
  fetchPhotos() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(samplePhotos), 500);
    });
  },
};
