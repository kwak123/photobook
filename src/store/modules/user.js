const state = {
  avatar: '',
  username: '',
  first: '',
  last: '',
  rating: '',
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
  mutations,
};
