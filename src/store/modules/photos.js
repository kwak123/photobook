import photobookApi from '../../api/photobook';

const state = {
  photoList: [],
  selectedPhoto: {},
  fetching: false,
  error: '',
};

const actions = {
  fetchPhotoList({ commit }) {
    commit('setFetchingStart');
    return photobookApi.fetchPhotoList()
      .then((photoList) => {
        commit('setFetchingComplete');
        commit('setPhotoList', { photoList });
      })
      .catch((error) => {
        commit('setFetchingComplete');
        commit('setError', { error: error.message });
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
  setFetchingStart(localState) {
    localState.fetching = true;
  },
  setFetchingComplete(localState) {
    localState.fetching = false;
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
