import Vue from 'vue';
import Vuex from 'vuex';

import { getCurrentYear } from '../utils/dates';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedMonthIndex: null,
    currentYear: getCurrentYear(),
    selectedDates: []
  },

  mutations: {
    storeSelectedMonthIndex(state, monthIndex) {
      state.selectedMonthIndex = monthIndex;
    },

    storeSelectedDates(state, dates) {
      state.dates = dates;
    }
  },

  actions: {
    setSelectedMonthIndex({ commit }, monthIndex) {
      commit('storeSelectedMonthIndex', monthIndex);
    },

    setSelectedDates({ commit }, dates) {
      commit('storeSelectedDates', dates);
    }
  },

  getters: {
    selectedMonthIndex: state => state.selectedMonthIndex,
    currentYear: state => state.currentYear,
    selectedDates: state => state.selectedDates
  }
});
