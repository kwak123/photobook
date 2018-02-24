import photobookApi from '../../api/photobook';

const state = {
  avatar: '',
  username: '',
  first: '',
  last: '',
  rating: '',
};

const actions = {
  fetchUser({ commit }) {
    return photobookApi.fetchUser()
      .then(user => commit('setUser', user));
  },
};

const mutations = {
  setUser(localState, { avatar, username, first, last }) {
    Object.assign(localState, { avatar, username, first, last });
  },
  setRating(localState, { rating }) {
    localState.rating = rating;
  },
};

export default {
  state,
  actions,
  mutations,
};
