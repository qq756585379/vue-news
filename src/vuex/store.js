import Vue from 'vue';
import Vuex from 'vuex';
import loadding from './modules/loading';
import barshow from './modules/barshow';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    loadding,
    barshow
  }
});
