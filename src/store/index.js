import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    titleBar: 'Home',
    pageAdministration: 'Users',
    companyType: 'seller',
    listUsers: [],
    listItems: {
      services: [],
      food: [],
      clothes: [],
      durables: [],
      construction: [],
      others: []
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
    setListServices(state, newList) {
      state.listItems.services = newList

    },
    setListFood(state, newList) {
      state.listItems.food = newList

    },
    setListClothes(state, newList) {
      state.listItems.clothes = newList

    },
    setListDurable(state, newList) {
      state.listItems.durable = newList

    },
    setListConstruction(state, newList) {
      state.listItems.construction = newList

    },
    setListOthers(state, newList) {
      state.listItems.other = newList

    }
  },
  getters: {
    titleBar: state => state.titleBar,
    pageAdministration: state => state.pageAdministration,
    companyType: state => state.companyType,
    listUsers: state => state.listUsers,
    listItems: state => state.listItems,
    listServices: state => state.listItems.services,
    listFood: state => state.listItems.food,
    listClothes: state => state.listItems.clothes,
    listDurable: state => state.listItems.durable,
    listConstruction: state => state.listItems.construction,
    listOthers: state => state.listItems.others

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

      context.commit('setListServices', newItems.services)
      context.commit('setListFood', newItems.food)
      context.commit('setListClothes', newItems.clothes)
      context.commit('setListDurable', newItems.durables)
      context.commit('setListConstruction', newItems.construction)
      context.commit('setListOthers', newItems.others)
    },

  },
  modules: {
  }
})
