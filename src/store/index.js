import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    titleBar: 'Home',
    pageAdministration: 'Users'
  },
  
  mutations: {

    setTitleBar(state, newTitle) {
      state.titleBar = newTitle

    },
    setAdministrationPage(state, newPage) {
      state.pageAdministration = newPage

    },
  },
  getters: {
    titleBar: state => state.titleBar,
    pageAdministration: state => state.pageAdministration,

  },
  actions: {
    changeTitleBar(context, newTitle){
      context.commit('setTitleBar', newTitle)
    },
    changeAdministrationPage(context, newPage) {
      context.commit('setAdministrationPage', newPage)
    }

  },
  modules: {
  }
})
