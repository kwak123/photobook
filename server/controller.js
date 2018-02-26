const db = require('./db');

const photos = {
  fetchPhotos: (req, res) => {
    const { userId } = req.query;
    const photoList = db.fetchPhotoList(userId);
    res.send(photoList);
  },

  updatePhoto: (req, res) => {
    db.updatePhoto(req.body);
    res.sendStatus(200);
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
