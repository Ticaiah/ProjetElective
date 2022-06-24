import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,

    user:{
        first_name: "",
        last_name: "",
        mail: "",
        password: "",
        phone_number: "",
        address: "",
        type: ""
    },
    
    login:{
        login:"",
        password:""
    }
  
  },
  getters: {
  },
  mutations: {
    createUser(state, payload){

        state.user.first_name = payload.first_name;
        state.user.last_name = payload.last_name;
        state.user.mail = payload.mail;
        state.user.password = payload.password;
        state.user.phone_number = payload.phone_number;
        state.user.address = payload.address;
        state.user.type = payload.type;
    },

    loginUser(state, payload){

        state.login.login = payload.mail;
        state.login.password = payload.password;
    
    }
    
  },
  actions: {
    createUser(context, payload){
        context.commit("createUser",payload)
    },

    loginUser(context, payload){
        context.commit("loginUser",payload)
    }

  },
  modules: {
  }
})


