const db = require('./db');

const photos = {
  fetchPhotos: (req, res) => {
    const { userId } = req.query;
    const photoList = db.fetchPhotoList(userId);
    res.send(photoList);
  },
};

const user = {
  fetchUser: (req, res) => {
    const currentUser = db.fetchUser();
    res.send(currentUser);
  },
};

module.exports = {
  photos,
  user,
};
