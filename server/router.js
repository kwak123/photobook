const router = require('express').Router();
const controller = require('./controller');

router.get('/api/user', controller.user.fetchUser);

router.get('/api/photos', controller.photos.fetchPhotos);

module.exports = app => app.use('/', router);
