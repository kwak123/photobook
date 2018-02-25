import photobookApi from '../../api/photobook';

const state = {
  avatar: '',
  username: '',
  first: '',
  last: '',
  rating: '',
  requesting: false,
};

const actions = {
  fetchUser({ commit }) {
    commit('setUserRequestingStart');
    return photobookApi.fetchUser()
      .then((user) => {
        commit('setUserRequestingComplete');
        commit('setUser', user);
      });
  },
};

const mutations = {
  setUser(localState, { avatar, username, first, last }) {
    Object.assign(localState, { avatar, username, first, last });
  },
  setRating(localState, { rating }) {
    localState.rating = rating;
  },
  setUserRequestingStart(localState) {
    localState.requesting = true;
  },
  setUserRequestingComplete(localState) {
    localState.requesting = false;
  },
};

export default {
  state,
  actions,
  mutations,
};
