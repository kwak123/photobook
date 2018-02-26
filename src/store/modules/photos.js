import photobookApi from '../../api/photobook';

const state = {
  photoList: [],
  selectedPhoto: {},
  requesting: false,
  error: '',
};

const actions = {
  fetchPhotoList({ commit }, { userId }) {
    commit('setPhotoRequestingStart');
    return photobookApi.fetchPhotoList(userId)
      .then((photoList) => {
        commit('setPhotoRequestingComplete');
        commit('setPhotoList', { photoList });
      })
      .catch((error) => {
        commit('setPhotoRequestingComplete');
        commit('setPhotoError', { error: error.message });
      });
  },
  postPhotoUpdate({ commit, dispatch }, payload) {
    commit('setPhotoRequestingStart');
    return photobookApi.postPhotoUpdate(payload)
      .then(() => {
        commit('setPhotoRequestingComplete');
        dispatch('updateSelectedPhoto', payload);
      })
      .catch((error) => {
        commit('setPhotoRequestingComplete');
        commit('setPhotoError', { error: error.message });
      });
  },
  updateSelectedPhoto({ commit }, { contentType, content }) {
    return new Promise((resolve) => {
      const type = contentType[0].toUpperCase() + contentType.slice(1);
      const mutation = `setPhoto${type}`;
      commit(mutation, { [contentType]: content });
      resolve();
    });
  },
};

const getters = {
  getPhotosAverage: (localState) => {
    const filtered = localState.photoList.filter(photo => photo.rating);
    const total = filtered.reduce((acc, photo) => acc + photo.rating, 0);
    if (!total) { return '0.0'; }
    return (total / filtered.length).toFixed(1);
  },
};

const mutations = {
  setPhotoList(localState, { photoList }) {
    if (Array.isArray(photoList)) {
      localState.photoList = photoList;
    }
  },
  setSelectedPhoto(localState, { idx }) {
    localState.selectedPhoto = localState.photoList[idx];
  },
  setPhotoRating(localState, { rating }) {
    localState.selectedPhoto.rating = rating;
  },
  setPhotoTitle(localState, { title }) {
    localState.selectedPhoto.title = title;
  },
  setPhotoDescription(localState, { description }) {
    localState.selectedPhoto.description = description;
  },
  setPhotoRequestingStart(localState) {
    localState.requesting = true;
  },
  setPhotoRequestingComplete(localState) {
    localState.requesting = false;
  },
  setPhotoError(localState, { error }) {
    localState.error = error;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
