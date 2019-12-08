import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    titleBar: 'Home'
  },
  mutations: {

    setTitleBar(state, newTitle) {
      state.titleBar = newTitle

    }
  },
  getters: {
    titleBar: state => state.titleBar
  },
  actions: {
    changeTitleBar(context, newTitle){
      context.commit('setTitleBar', newTitle)
    }

  },
  modules: {
  }
})
