import Vue from 'vue';
import Vuex from 'vuex';
import photoList from './modules/photo-list';
import user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    photoList,
    user,
  },
});
