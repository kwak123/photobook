const actions = {
  start: ({ dispatch, commit, rootState, rootGetters }) => dispatch('fetchUser')
    .then(() => {
      const userId = rootState.user.userId;
      return dispatch('fetchPhotoList', { userId });
    })
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
