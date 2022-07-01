import { Module } from "vuex";
import CookieUtils from "@/utils/cookieUtils";
import TokenUtils from "@/utils/tokenUtils";

var token       = CookieUtils.getCookie("token") || "";
var id          = TokenUtils.getValueFromToken(token, "id") || "";
var first_name  = TokenUtils.getValueFromToken(token, "first_name") || "";
var last_name   = TokenUtils.getValueFromToken(token, "last_name") || "";
var mail        = TokenUtils.getValueFromToken(token, "mail") || "";
var role        = TokenUtils.getValueFromToken(token, "type") || "guest";
var connected   = token ? true : false;


const userStore: Module<any, any> = {
  state: {
    auth: {
      token: token,
      id: id,
      role: role,
      mail: mail,
      first_name: first_name,
      last_name: last_name,
      connected: connected
    },
  },
  getters: {
  },
  mutations: {
    loginUser(state, payload) {

      state.login.login = payload.mail;
      state.login.password = payload.password;
    },

    setToken(state, payload) {
      state.auth.token       = payload || "";
      state.auth.id          = TokenUtils.getValueFromToken(payload, "id") || "";
      state.auth.first_name  = TokenUtils.getValueFromToken(payload, "first_name") || "";
      state.auth.last_name   = TokenUtils.getValueFromToken(payload, "last_name") || "";
      state.auth.mail        = TokenUtils.getValueFromToken(payload, "mail") || "";
      state.auth.role        = TokenUtils.getValueFromToken(payload, "type") || "guest";
      state.auth.connected   = payload ? true : false;
    },
    disconnectUser(state) {
      state.auth.token = "";
      state.auth.id = "";
      state.auth.role = "guest";
      state.auth.connected = false;
      state.auth.first_name = "";
      state.auth.last_name = "";
      state.auth.mail = "";
      
    }

  },
  actions: {
    createUser(context, payload) {
      context.commit("createUser", payload)
    },

    loginUser(context, payload) {
      context.commit("loginUser", payload)
    },

    setToken(context, payload) {
      context.commit("setToken", payload)
    },
    disconnectUser(context) {
      context.commit("disconnectUser");
    }



  },
  modules: {
  }
}

export default userStore;
