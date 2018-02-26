const sampleData = require('../sample.json');
const sampleUser = require('../sample-user.json');

const fetchPhotoList = userId => sampleData.find(users => users.userId === Number(userId)).photos;

const updatePhoto = (params) => {
  const photos = fetchPhotoList(params.userId);
  const photoToUpdate = photos.find(photo => photo.id === params.photoId);
  const keys = Object.keys(params);
  keys.forEach((key) => {
    if (!key.includes('Id')) {
      photoToUpdate[key] = params[key];
    }
  });
};

const fetchUser = () => sampleUser;

module.exports = {
  fetchPhotoList,
  updatePhoto,
  fetchUser,
};
