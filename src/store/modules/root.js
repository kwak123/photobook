const actions = {
  start: ({ dispatch, commit, rootGetters }) => dispatch('fetchUser')
    .then(() => dispatch('fetchPhotoList'))
    .then(() => {
      const rating = rootGetters.getPhotosAverage;
      commit('setUserRating', { rating });
    }),
  updateRating: ({ commit, rootGetters }, { rating }) => new Promise((resolve) => {
    commit('setPhotoRating', { rating });
    const newRating = rootGetters.getPhotosAverage;
    commit('setUserRating', { rating: newRating });
    resolve();
  }),
};

export default {
  actions,
};
