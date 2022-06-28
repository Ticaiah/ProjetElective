<template>
  <v-menu bottom min-width="200px" rounded offset-y>
    <template v-slot:activator="{ on }">
      <v-btn icon x-large v-on="on">
        <v-avatar color="brown" size="48">
          <span class="white--text text-h5">IT</span>
        </v-avatar>
      </v-btn>
    </template>
    <v-card>
      <v-list-item-content class="justify-center">
        <div class="mx-auto text-center">
          <v-avatar color="brown">
            <span class="white--text text-h5">IT</span>
          </v-avatar>
          <h3>Ines Touloum</h3>
          <p class="text-caption mt-1">oui@oui.fr</p>
          <v-divider class="my-3"></v-divider>
          <v-btn depressed rounded text to="/my-account"> Mon compte </v-btn>
          <v-divider class="my-3"></v-divider>
          <v-btn depressed rounded text @click="disconnect" color="red"> Se deconnecter </v-btn>
        </div>
      </v-list-item-content>
    </v-card>
  </v-menu>
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
