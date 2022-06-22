<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/3.8.95/css/materialdesignicons.css"
    />
    <!-- LA BAR EN HAUT -->
    <v-app-bar app elevate-on-scroll>
      <v-btn icon @click="toggleDrawer()"><v-icon >{{iconLink}}</v-icon></v-btn>
      <v-toolbar-title>CES'EAT</v-toolbar-title>
      <v-spacer></v-spacer>
      <LogInButton />
      <SignInButton />
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import SignInButton from "../buttons/signInButton.vue";
import LogInButton from "../buttons/LogInButton.vue";

@Component({
  components: {
    SignInButton,
    LogInButton,
  },
})
export default class NavigationBars extends Vue {
  drawer = false;
  get iconLink(){
    return this.drawer ? "mdi-chevron-left" : "mdi-menu"
  }

  public toggleDrawer() {
    this.drawer = !this.drawer;
    this.$emit("DrawerToggled", this.drawer);
  }
}
</script>
<style></style>
