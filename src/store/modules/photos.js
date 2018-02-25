import photobookApi from '../../api/photobook';

const state = {
  photoList: [],
  selectedPhoto: {},
  requesting: false,
  error: '',
};

const actions = {
  fetchPhotoList({ commit }) {
    commit('setRequestingStart');
    return photobookApi.fetchPhotoList()
      .then((photoList) => {
        commit('setRequestingComplete');
        commit('setPhotoList', { photoList });
      })
      .catch((error) => {
        commit('setRequestingComplete');
        commit('setError', { error: error.message });
      });
  },
  postPhotoUpdate({ commit }, { id, title, rating, description }) {

  }
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
  setRequestingStart(localState) {
    localState.requesting = true;
  },
  setRequestingComplete(localState) {
    localState.requesting = false;
  },
  setError(localState, { error }) {
    localState.error = error;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
