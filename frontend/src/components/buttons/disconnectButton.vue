<template>
  <v-menu bottom min-width="200px" rounded offset-y>
    <template v-slot:activator="{ on }">
      <div>
        <v-btn icon class="avatar" x-large v-on="on">
          <v-avatar  color="green darken-1" size="48">
            <span class="white--text text-h5"><v-icon>mdi-account</v-icon></span>
          </v-avatar>
        </v-btn>
      </div>  
    </template>
    <v-card>
      <v-list-item-content class="justify-center">
        <div class="mx-auto text-center">
          <v-avatar color="green darken-1">
            <span class="white--text text-h5"><v-icon color="white">mdi-account</v-icon></span>
          </v-avatar>
          <h3>{{name}}</h3>
          <p class="text-caption mt-1">{{mail}}</p>
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

  mail = this.$store.state.userStore.auth.mail;
  name = this.$store.state.userStore.auth.last_name +" "+this.$store.state.userStore.auth.first_name;

  public disconnect() {
    CookieUtils.deleteCookie("token");
    this.$store.dispatch("disconnectUser");
    this.$router.push("/");
  }
}
</script>

<style>
.avatar{
  margin-right: 100px;
}
#connexion {
  margin: 5px;
}
</style>
