const router = require('express').Router();
const controller = require('./controller');

router.get('/api/user', controller.user.fetchUser);

router.get('/api/photos', controller.photos.fetchPhotos);

router.post('/api/photos/update', controller.photos.updatePhoto);

module.exports = app => app.use('/', router);
