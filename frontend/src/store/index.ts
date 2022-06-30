import Vue from 'vue'
import Vuex from 'vuex'
import userStore from "./modules/userStore";
import addressStore from "./modules/addressStore";
import sidebarStore from "./modules/sidebarStore";
import restaurantStore from "./modules/restaurantStore";

Vue.use(Vuex)

var store = new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
    initialiseStore(state) {
      console.log('vuex store initialised');
			// Check if the ID exists
      const localStore = localStorage.getItem('store');
			if(localStore) {
				// Replace the state object with the stored item
				this.replaceState(
					Object.assign(state, JSON.parse(localStore))
				);
			}
		}
    
  },
  actions: {

  },
  modules: {
    userStore,
    sidebarStore,
  }
});

store.subscribe((mutation, state) => {
  console.log("store changed");
  localStorage.setItem('store', JSON.stringify(state));
});



export default store;