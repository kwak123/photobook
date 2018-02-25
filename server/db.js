const samplePhotos = require('../sample.json');
const sampleUser = require('../sample-user.json');

const fetchPhotoList = () => samplePhotos;

const fetchUser = () => sampleUser;

module.exports = {
  fetchPhotoList,
  fetchUser,
};
