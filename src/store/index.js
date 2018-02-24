import Vue from 'vue';
import Vuex from 'vuex';
import photos from './modules/photos';
import user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    photos,
    user,
  },
});
