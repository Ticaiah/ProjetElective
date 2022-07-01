import Vue from 'vue'
import Vuex from 'vuex'
import userStore from "./modules/userStore";
import sidebarStore from "./modules/sidebarStore";
import basketStore from "./modules/basketStore"

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
    basketStore
  }
});

store.subscribe((mutation, state) => {
  console.log("store changed");
  localStorage.setItem('store', JSON.stringify(state));
});



export default store;