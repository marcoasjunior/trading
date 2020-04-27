import Vue from 'vue'
import Vuex from 'vuex'
import compareBids from '../utils/sortBids'

Vue.use(Vuex)
/* eslint-disable no-console */
export default new Vuex.Store({
  state: {
    titleBar: 'Home',
    pageAdministration: 'Users',
    companyType: '',
    dealBids: [],
    listUsers: [],
    listItems: [],
    listTrading: [],
    listTradingItems: [],
    proposalItems: [],
    rankedItems: [],
    selectedItems: [],
    selectedUsers: [],
    winners: [],
    tradingStep: 1,
    modalTradingNew: false,
    tradingConfig: {

      number: null,
      notice: null,
      target: '',
      evaluation: '',
      startDate: new Date().toISOString().substr(0, 10),
      endDate: new Date().toISOString().substr(0, 10),
      time: null,
      endTime: null

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
    setListTrading(state, newList) {
      state.listTrading = newList

    },
    setListTradingItems(state, newList) {
      state.listTradingItems = newList

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
    setProposalItems(state, newList) {
      state.proposalItems = newList
    },
    setRankedItems(state, newList) {
      state.rankedItems = newList

    },
    setDealBids(state, newBids) {
      state.dealBids = newBids

    },
    setWinners(state, newList) {
      state.winners = newList

    },
    setTradingStep(state, newStep) {
      state.tradingStep = newStep

    },
    setTradingConfig(state, newConfig) {

      if (newConfig.number) state.tradingConfig.number = newConfig.number
      else if (newConfig.notice) state.tradingConfig.notice = newConfig.notice
      else if (newConfig.target) state.tradingConfig.target = newConfig.target
      else if (newConfig.evaluation) state.tradingConfig.evaluation = newConfig.evaluation
      else if (newConfig.time) state.tradingConfig.time = newConfig.time
      else if (newConfig.endTime) state.tradingConfig.endTime = newConfig.endTime
      else if (newConfig.endDate) state.tradingConfig.endDate = newConfig.endDate
      else state.tradingConfig.startDate = newConfig.date

    },
  },
  getters: {
    titleBar: state => state.titleBar,
    pageAdministration: state => state.pageAdministration,
    companyType: state => state.companyType,
    listUsers: state => state.listUsers,
    listDealBids: state => state.dealBids,
    listItems: state => state.listItems,
    listTrading: state => state.listTrading,
    listTradingItems: state => state.listTradingItems,
    proposalItems: state => state.proposalItems,
    rankedItems: state => state.rankedItems,
    winners: state => state.winners,
    tradingStep: state => state.tradingStep,
    selectedItems: state => state.selectedItems,
    selectedUsers: state => state.selectedUsers,
    tradingConfig: state => state.tradingConfig,
    tradingConfigNumber: state => state.tradingConfig.number,
    tradingConfigNotice: state => state.tradingConfig.notice,
    tradingConfigTarget: state => state.tradingConfig.target,
    tradingConfigEvaluation: state => state.tradingConfig.evaluation,
    tradingConfigStartDate: state => state.tradingConfig.startDate,
    tradingConfigEndDate: state => state.tradingConfig.endDate,
    tradingConfigTime: state => state.tradingConfig.time,
    tradingConfigEndTime: state => state.tradingConfig.endTime,
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
    changeListTrading(context, newItems) {
      context.commit('setListTrading', newItems)

    },
    changeListTradingItems(context, newItems) {
      context.commit('setListTradingItems', newItems)

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
    changeProposalItems(context, newItems) {
      context.commit('setProposalItems', newItems)
    },
    changeRankedItems(context, newItems) {

      let newRankedList = newItems.sort(compareBids)

      context.commit('setRankedItems', newRankedList)
    },

    changeWinners(context, newList) {
      context.commit('setWinners', newList)
    },
    changeTradingStep(context, newStep) {
      context.commit('setTradingStep', newStep)
    },

    changeBids(context, newBids) {
      context.commit('setDealBids', newBids)
    },
  },
  modules: {}
})