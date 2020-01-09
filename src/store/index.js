import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    titleBar: 'Home',
    pageAdministration: 'Users',
    companyType: 'seller',
    listUsers: [],
    listItems: []
    
  },
  
  mutations: {

    setTitleBar(state, newTitle) {
      state.titleBar = newTitle

    },
    setAdministrationPage(state, newPage) {
      state.pageAdministration = newPage

    },
    setCompanyType(state, newType) {
      state.companyType = newType

    },
    setListUsers(state, newUsers) {
      state.listUsers = newUsers

    },
    setListItems(state, newList) {
      state.listItems = newList

    }
  },
  getters: {
    titleBar: state => state.titleBar,
    pageAdministration: state => state.pageAdministration,
    companyType: state => state.companyType,
    listUsers: state => state.listUsers,
    listItems: state => state.listItems

  },
  actions: {
    changeTitleBar(context, newTitle){
      context.commit('setTitleBar', newTitle)
    },
    changeAdministrationPage(context, newPage) {
      context.commit('setAdministrationPage', newPage)
    },
    changeCompanyType(context, newType) {
      context.commit('setCompanyType', newType)
    },
    changeListUsers(context, newUsers) {
      context.commit('setListUsers', newUsers)
    },
    changeListItems(context, newItems) {

      context.commit('setListItems', newItems)

    },

  },
  modules: {
  }
})
