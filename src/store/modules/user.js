import photobookApi from '../../api/photobook';

const state = {
  userId: -1,
  avatar: '',
  username: '',
  first: '',
  last: '',
  rating: '',
  requesting: false,
  error: '',
};

const actions = {
  fetchUser({ commit }) {
    commit('setUserRequestingStart');
    return photobookApi.fetchUser()
      .then((user) => {
        commit('setUserRequestingComplete');
        commit('setUser', user);
      })
      .catch((error) => {
        commit('setUserRequestingComplete');
        commit('setUserError', { error: error.message });
      });
  },
};

const mutations = {
  setUser(localState, { userId, avatar, username, first, last }) {
    Object.assign(localState, { userId, avatar, username, first, last });
  },
  setUserRating(localState, { rating }) {
    localState.rating = rating;
  },
  setUserRequestingStart(localState) {
    localState.requesting = true;
  },
  setUserRequestingComplete(localState) {
    localState.requesting = false;
  },
  setUserError(localState, { error }) {
    localState.error = error;
  },
};

export default {
  state,
  actions,
  mutations,
};
