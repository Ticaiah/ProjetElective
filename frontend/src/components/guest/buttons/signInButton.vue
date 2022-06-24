<template>
    <v-btn to="/register" id="inscription" elevation="1" rounded color="black" @click="showCard()"> Inscription </v-btn>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import store from "@/store/index"


@Component
export default class SignInButton extends Vue {
   public showCard(){
    store.commit("showSignInCard");

  }
}
</script>

<style>
    #inscription{
        margin: 5px;
        color: white !important;
    }
</style>