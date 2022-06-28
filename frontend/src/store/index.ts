import Vue from 'vue'
import Vuex from 'vuex'
import userStore from "./modules/userStore";
import addressStore from "./modules/addressStore";
import sidebarStore from "./modules/sidebarStore";
import restaurantStore from "./modules/restaurantStore";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  
    
  },
  actions: {

  },
  modules: {
    userStore,
    addressStore,
    sidebarStore,
    restaurantStore
  }
})
