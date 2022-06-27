import Vue from 'vue'
import Vuex from 'vuex'
import { restaurantsModel } from "@/model/restaurantsModel";
import { addressesModel } from '@/model/addressesModel';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    token:{
      token: null,
      islogged: false,
    },

    restaurant: new restaurantsModel(),
  
  },
  getters: {
  },
  mutations: {
    createRestaurant(state, restaurant:restaurantsModel){

        state.restaurant.name = restaurant.name;
        state.restaurant.description = restaurant.description;
        state.restaurant.address = restaurant.address;
        state.restaurant.city = restaurant.city
        state.restaurant.cp = restaurant.cp
        state.restaurant.user_id = restaurant.user_id;
        state.restaurant.phone_number= restaurant.phone_number;
    }
  },
  actions: {
    createUser(context, restaurant){
        context.commit("createUser",restaurant)
    },
  },
  modules: {
  }
})


