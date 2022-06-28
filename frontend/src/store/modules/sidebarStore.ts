import { Module } from "vuex";

const sidebarStore: Module<any, any> = {
  state: {
    toggled: false,
  },
  getters: {
  },
  mutations: {
    toggleSidebar(state, payload) {
      state.toggled = payload;
    }
  },
  actions: {
    toggleSidebar(context, payload) {
      context.commit("toggleSidebar", payload)
    }
  },
  modules: {
  }
};

export default sidebarStore;

