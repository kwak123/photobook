import axios from 'axios';

// Errors are handled down stream by the actions
export default {

  /**
   * Fetches the singular user from the server
  */
  fetchUser() {
    return axios.get('/api/user')
      .then(({ data }) => data);
  },

  /**
   * Fetches the current list of photos from the phtoso
  */
  fetchPhotoList(userId) {
    return axios.get('/api/photos', { params: { userId } })
      .then(({ data }) => data);
  },

  /**
   * Post request to server, asking it to update the desired photo
   * @param {Object} payload Object with desired updates to the server
   */
  postPhotoUpdate(payload) {
    const { userId, photoId, title, rating, description } = payload;
    return axios.post('/api/photos/update', { userId, photoId, title, rating, description })
      .then(() => true);
  },
};
