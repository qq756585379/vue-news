// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Vuex from 'vuex';
import router from './router';
import axios from 'axios';
import store from './vuex/store';
import filters from './filters/index';
import Loading from './components/loading';

// 轮播图插件 https://www.npmjs.com/package/vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper';

require('./assets/css/base.css'); // 引入全局的base文件

Vue.config.productionTip = false;

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));

Vue.use(Vuex);
Vue.use(Loading);
Vue.use(VueAwesomeSwiper);

// axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的
axios.interceptors.request.use(function (config) { // 配置发送请求的信息
  store.dispatch('showLoading');
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) { // 配置请求回来的信息
  setTimeout(function () {
    store.dispatch('hideLoading');
  }, 2000);
  return response;
}, function (error) {
  return Promise.reject(error);
});

Vue.prototype.$http = axios;  // 其他页面在使用axios的时候直接  this.$http就可以了

// axios.defaults.baseURL = (process.env.NODE_ENV !== 'production' ? config.dev.httpUrl : config.build.httpUrl);
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
});
