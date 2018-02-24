import photobookApi from '../../api/photobook';

const state = {
  photoList: [],
  selectedPhoto: {},
};

const actions = {
  fetchPhotoList({ commit }) {
    return photobookApi.fetchPhotoList()
      .then(photoList => commit('setPhotoList', { photoList }));
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
};

export default {
  state,
  getters,
  actions,
  mutations,
};