<template>
  <v-app class="coucou">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/3.8.95/css/materialdesignicons.css"
    />

    <!-- LA BAR EN HAUT -->
    <v-app-bar app elevate-on-scroll>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>CES'EAT</v-toolbar-title>
      <v-spacer></v-spacer>
      <LogInButton />
      <SignInButton />
    </v-app-bar>

    <!-- LA BAR QUI S'OUVRE SUR LE COTE -->
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list-item-group>
        <v-list-item>
          <SignInButton2/>
        </v-list-item>
        <v-list-item>
          <LogInButton2/>
        </v-list-item>
      </v-list-item-group>
      <v-list-item-group v-for="link in links">
        <v-list-item :to="link.route">
          <v-list-item-title>{{ link.title }}</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-navigation-drawer>

    <!-- TOUT LE CONTENU -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import SignInButton from "./buttons/signInButton.vue";
import LogInButton from "./buttons/LogInButton.vue";
import SignInButton2 from "./buttons/signInButton2.vue";
import LogInButton2 from "./buttons/LogInButton2.vue";

@Component({
  components: {
    SignInButton,
    LogInButton,
    SignInButton2,
    LogInButton2,
  },
})
export default class NavigationBars extends Vue {
  drawer = false;

  links = [
    {
      route: "/",
      title: "Home",
    },
    {
      route: "/about",
      title: "About",
    },
    {
      route: "/shop",
      title: "Shop",
    },
  ];
}
</script>
<style>
  
</style>
