const HEAD_SHOW_SUCCESS = 'HEAD_SHOW_SUCCESS';
const HEAD_SHOW_FAIL = 'HEAD_SHOW_FAIL';
const FOOTER_SHOW = 'FOOTER_SHOW';
const FOOTER_HIDE = 'FOOTER_HIDE';

const state = {
  headShow: true,
  footerShow: true
};

const getters = {
  headShow: state => state.headShow,
  footerShow: state => state.footerShow
};

const actions = {
  SHOW_HEAD_SUCC: ({commit}) => {
    commit(HEAD_SHOW_SUCCESS);
  },
  SHOW_HEAD_FAIL: ({commit}) => {
    commit(HEAD_SHOW_FAIL);
  },
  hideFooter: ({commit}) => {
    commit(FOOTER_HIDE);
  },
  showFooter: ({commit}) => {
    commit(FOOTER_SHOW);
  }
};

const mutations = {
  [HEAD_SHOW_SUCCESS] (state) {
    state.headShow = true;
  },
  [HEAD_SHOW_FAIL] (state) {
    state.headShow = false;
  },
  [FOOTER_HIDE] (state) {
    state.footerShow = false;
  },
  [FOOTER_SHOW] (state) {
    state.footerShow = true;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
