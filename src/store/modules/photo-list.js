const state = {
  photoList: [],
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
  setPhotoRating(localState, { idx, rating }) {
    if (localState.photoList[idx]) {
      localState.photoList[idx].rating = rating;
    }
  },
  setPhotoTitle(localState, { idx, title }) {
    if (localState.photoList[idx]) {
      localState.photoList[idx].title = title;
    }
  },
  setPhotoDescription(localState, { idx, description }) {
    if (localState.photoList[idx]) {
      localState.photoList[idx].description = description;
    }
  },
};

export default {
  state,
  getters,
  mutations,
};
