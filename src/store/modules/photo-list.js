const photoListState = {
  photoList: [],
};

const photoListGetters = {
  getPhotosAverage: (state) => {
    const total = state.photoList.reduce((acc, photo) => acc + photo.rating, 0);
    if (!total) { return '0.0'; }
    return (total / state.photoList.length).toFixed(1);
  },
};

const photoListActions = {
};

const photoListMutations = {
  setPhotoList(state, { photoList }) {
    if (Array.isArray(photoList)) {
      state.photoList = photoList;
    }
  },
  setPhotoRating(state, { idx, rating }) {
    if (state.photoList[idx]) {
      state.photoList[idx].rating = rating;
    }
  },
  setPhotoTitle(state, { idx, title }) {
    if (state.photoList[idx]) {
      state.photoList[idx].title = title;
    }
  },
  setPhotoDescription(state, { idx, description }) {
    if (state.photoList[idx]) {
      state.photoList[idx].description = description;
    }
  },
};

export default {
  photoListState,
  photoListGetters,
  photoListActions,
  photoListMutations,
};
