<template>
  <v-btn to="/login" id="connexion" elevation="1" tile width="100%">
    Connexion
  </v-btn>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class LoginButton2 extends Vue {}
</script>

<style>
#connexion {
  margin: 5px;
}
</style>
