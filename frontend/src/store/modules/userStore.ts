import { Module } from "vuex";
import CookieUtils from "@/utils/cookieUtils";
import TokenUtils from "@/utils/tokenUtils";

const userStore: Module<any, any> = {
  state: {
    auth:{
      token: CookieUtils.getCookie("token") || "",
      id : TokenUtils.getValueFromToken(CookieUtils.getCookie("token") || "", "id") || "",
      role : TokenUtils.getValueFromToken(CookieUtils.getCookie("token") || "", "type") || "guest",
      connected: CookieUtils.getCookie("token") ? true : false
    },
  },
  getters: {
  },
  mutations: {
    loginUser(state, payload){

        state.login.login = payload.mail;
        state.login.password = payload.password;
    },

    setToken(state,payload){
        state.auth.token = payload;
        state.auth.id = TokenUtils.getValueFromToken(payload, "id");
        state.auth.role = TokenUtils.getValueFromToken(payload, "type");
        state.auth.connected = payload ? true : false;
    },
    disconnectUser(state){
        state.auth.token = "";
        state.auth.id = "";
        state.auth.role = "guest";
        state.auth.connected = false;
    }
    
  },
  actions: {
    createUser(context, payload){
        context.commit("createUser",payload)
    },

    loginUser(context, payload){
        context.commit("loginUser",payload)
    },

    setToken(context, payload){
      context.commit("setToken",payload)  
    },
    disconnectUser(context){
      context.commit("disconnectUser");
    }



  },
  modules: {
  }
}

export default userStore;
