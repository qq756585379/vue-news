const HIDE_LOADING = 'HIDE_LOADING';
const SHOW_LOADING = 'SHOW_LOADING';

const state = {
  isloading: false
};

const getters = {
  isloading: state => state.isloading
};

const actions = {
  hideLoading: ({commit}) => {
    commit(HIDE_LOADING);
  },
  showLoading: ({commit}) => {
    commit(SHOW_LOADING);
  }
};

const mutations = {
  [HIDE_LOADING](state) {
    state.isloading = false;
  },
  [SHOW_LOADING](state) {
    state.isloading = true;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
