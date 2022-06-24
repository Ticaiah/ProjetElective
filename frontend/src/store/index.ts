import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logInCardisShown: false,
    role: "invite"
  
  },
  getters: {
  },
  mutations: {
    showLogInCard(state){
      state.logInCardisShown = true;
    },
    showSignInCard(state){
      state.logInCardisShown = false;
    }
    
  },
  actions: {

  },
  modules: {
  }
})


