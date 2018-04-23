import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    entries: [],
  },
  getters: {
    entries: state => state.entries,
  },
  mutations: {
    setEntries (state, entries) {
      state.entries = entries;
    },
  },
  actions: {
    getEntries(context,user) {
      return axios.get("/api/entries").then(response => {
	return context.commit('setEntries',response.data.entries);
      }).catch(err => {
	console.log("getEntries failed:",err);
      });
    },
  }
});
