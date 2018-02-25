import axios from 'axios';

export default {
  // Errors are handled down stream
  fetchUser() {
    return axios.get('/api/user')
      .then(({ data }) => data);
  },
  fetchPhotoList() {
    return axios.get('/api/photos')
      .then(({ data }) => data);
  },
};
