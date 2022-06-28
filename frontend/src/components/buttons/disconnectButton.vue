<template>
  <v-btn @click="disconnect" id="connexion" elevation="1" rounded>
    <v-icon left> mdi-account </v-icon>
    Se deconnecter
  </v-btn>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import CookieUtils from "@/utils/cookieUtils";

@Component
export default class DisconnectButton extends Vue {
  public disconnect() {
    CookieUtils.deleteCookie("token");
    this.$store.dispatch("disconnectUser");
    this.$router.push("/");
  }
}
</script>

<style>
#connexion {
  margin: 5px;
}
</style>
