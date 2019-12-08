import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    titleBar: 'Home'
  },
  mutations: {

    changeTitlebar(state) {
      state.titleBar = 'mudou'

    }
  },
  actions: {
  },
  modules: {
  }
})
