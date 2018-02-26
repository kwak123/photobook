const sampleData = require('../sample.json');
const sampleUser = require('../sample-user.json');

const fetchPhotoList = userId => sampleData.find(users => users.userId === Number(userId)).photos;

const fetchUser = () => sampleUser;

module.exports = {
  fetchPhotoList,
  fetchUser,
};
