import photobookApi from '../../api/photobook';

const state = {
  photoList: [],
  selectedPhoto: {},
  requesting: false,
  error: '',
};

const actions = {
  fetchPhotoList({ commit }) {
    commit('setPhotoRequestingStart');
    return photobookApi.fetchPhotoList()
      .then((photoList) => {
        commit('setPhotoRequestingComplete');
        commit('setPhotoList', { photoList });
      })
      .catch((error) => {
        commit('setPhotoRequestingComplete');
        commit('setPhotoError', { error: error.message });
      });
  },
  postPhotoUpdate({ commit }, payload) {
    commit('setPhotoRequestingStart');
    return photobookApi.postPhotoUpdate(payload)
      .then(() => {
        commit('setPhotoRequestingComplete');
        commit('updateSelectedPhoto', payload);
      })
      .catch((error) => {
        commit('setPhotoRequestingComplete');
        commit('setPhotoError', { error: error.message });
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
  updateSelectedPhoto(localState, properties) {
    // This will need some sanity checking in the future
    Object.assign(localState.selectedPhoto, properties);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
