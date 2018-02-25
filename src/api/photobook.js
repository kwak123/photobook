import axios from 'axios';

// Errors are handled down stream
export default {
  fetchUser() {
    return axios.get('/api/user')
      .then(({ data }) => data);
  },
  fetchPhotoList() {
    return axios.get('/api/photos')
      .then(({ data }) => data);
  },
  postPhotoUpdate({ id, title, rating, description }) {
    return axios.post('/api/photos/update', { id, title, rating, description })
      .then(({ data }) => data);
  },
};
