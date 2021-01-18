import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lastPoke: "",
    memory: [],
  },
  mutations: {
    test(state, n) {
      state.memory.unshift(n);
      if (state.memory.length === 2) {
        state.lastPoke = state.memory.pop();
      }
    },
  },
  actions: {},
  modules: {},
});
