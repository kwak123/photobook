const db = require('./db');

const photos = {
  fetchPhotos: (req, res) => {
    const photoList = db.fetchPhotoList();
    res.send(photoList);
  },
};

const users = {
  fetchUser: (req, res) => {
    const user = db.fetchUser();
    res.send(user);
  },
};

module.exports = {
  photos,
  users,
};
