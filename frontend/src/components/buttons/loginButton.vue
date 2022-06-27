<template>
  <v-btn to="/login" id="connexion" elevation="1" rounded>
    <v-icon left> mdi-account </v-icon>
    Connexion
  </v-btn>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";


@Component
export default class LoginButton extends Vue {
 
}
</script>

<style>
#connexion {
  margin: 5px;
}
</style>
