import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lastPoke: "",
    memory: []
  },
  mutations: {
    ///// Initialiizing memory as an empty List. Each time we visit a Pokemon details page,
    ///// it adds this Pokemon's name to memory. If memory.length > 2, then we memory.pop into
    ///// a variable, and we'll retrieve this variable to get our last visited Pokemon.
    getlastPoke(state, n) {
      state.memory.unshift(n);
      if (state.memory.length === 2) {
        state.lastPoke = state.memory.pop();
      }
    }
  },
  actions: {},
  modules: {}
});
