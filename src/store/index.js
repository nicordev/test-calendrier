import Vue from 'vue';
import Vuex from 'vuex';

import { getCurrentYear } from '../utils/dates';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedMonthIndex: null,
    currentYear: getCurrentYear()
  },

  mutations: {
    storeSelectedMonthIndex(state, monthIndex) {
      state.selectedMonthIndex = monthIndex;
    }
  },

  actions: {
    setSelectedMonthIndex({ commit }, monthIndex) {
      commit('storeSelectedMonthIndex', monthIndex);
    }
  },

  getters: {
    selectedMonthIndex: state => state.selectedMonthIndex,
    currentYear: state => state.currentYear
  }
});
