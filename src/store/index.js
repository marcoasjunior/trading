import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    titleBar: 'Home',
    pageAdministration: 'Users',
    companyType: 'seller',
    listUsers: [],
    listItems: [],
    selectedItems: [],
    selectedUsers: [],
    modalTradingNew: false,
    tradingConfig: {
      number: null,
      notice: null,
      target: String,
      evaluation: String,
      startDate: null

    }

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

    },
    setSelectedItems(state, newList) {
      state.selectedItems = newList

    },
    setSelectedUsers(state, newList) {
      state.selectedUsers = newList

    },
    setModalTradingNew(state, newState) {
      state.modalTradingNew = newState

    },
    setTradingConfig(state, newConfig) {

      if (newConfig.number) state.tradingConfig.number = newConfig.number
      else if (newConfig.notice) state.tradingConfig.notice = newConfig.notice
      else if (newConfig.target) state.tradingConfig.target = newConfig.target
      else if (newConfig.evaluation) state.tradingConfig.evaluation = newConfig.evaluation
      else state.tradingConfig.date = newConfig.date

    },
  },
  getters: {
    titleBar: state => state.titleBar,
    pageAdministration: state => state.pageAdministration,
    companyType: state => state.companyType,
    listUsers: state => state.listUsers,
    listItems: state => state.listItems,
    selectedItems: state => state.selectedItems,
    selectedUsers: state => state.selectedUsers,
    modalTradingNew: state => state.modalTradingNew

  },
  actions: {
    changeTitleBar(context, newTitle) {
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
    changeSelectedItems(context, newItems) {

      context.commit('setSelectedItems', newItems)
    },
    changeSelectedUsers(context, newUsers) {

      context.commit('setSelectedUsers', newUsers)
    },
    changeModalTradingNew(context, newState) {
      context.commit('setModalTradingNew', newState)
    },
    changeTradingConfig(context, newConfig) {

      context.commit('setTradingConfig', newConfig)
    },
  },
  modules: {}
})