import sampleUser from '../../sample-user.json';
import samplePhotos from '../../sample.json';

export default {
  // Stub
  getUser() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(sampleUser), 500);
    });
  },
  getPhotos() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(samplePhotos), 500);
    });
  },
};
