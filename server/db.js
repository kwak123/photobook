const sampleData = require('../sample.json');
const sampleUser = require('../sample-user.json');

const fetchPhotoList = userId => sampleData.find(users => users.userId === Number(userId)).photos;

const updatePhoto = (params) => {
  const photoToUpdate = sampleData.find(photo => photo.id === Number(params.id));
  const keys = Object.keys(params);
  keys.forEach((key) => {
    if (key !== 'id') {
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
