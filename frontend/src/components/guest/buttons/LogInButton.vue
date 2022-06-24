<template>
  <v-btn to="/log-in" id="connexion" elevation="1" rounded @click="showCard()">
    <v-icon left> mdi-account </v-icon>
    Connexion
  </v-btn>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import store from "@/store/index"

@Component
export default class LogInButton extends Vue {
  public showCard(){
    store.commit("showLogInCard");
    console.log(store.state.logInCardisShown)
  }
}
</script>

<style>
#connexion {
  margin: 5px;
}
</style>
