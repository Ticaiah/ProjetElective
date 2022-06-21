<template>
  <v-btn id="connexion" elevation="1" rounded >
    <v-icon left> mdi-account </v-icon>
    Connexion
  </v-btn>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class LogInButton extends Vue {}
</script>

<style>
#connexion {
  margin: 5px;
}
</style>
