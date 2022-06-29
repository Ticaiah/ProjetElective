<template>
  <v-app>
    <NavigationBar />
    <SideBar />

    <!-- TOUT LE CONTENU -->
    <v-main
      :class="
        $store.state.userStore.auth.connected
          ? 'homepage-connected'
          : 'homepage'
      "
    >
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import NavigationBar from "./components/navigation/navigationBar.vue";
import SideBar from "./components/navigation/sideBar.vue";

@Component({
  components: {
    NavigationBar,
    SideBar,
  },
})
export default class Test extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}
.homepage {
  width: 100%;
  background-image: url("@/../public/assets/pizza.jpg");
  background-color: #cccccc;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.homepage-connected {
  width: 100%;
  background-image: url("@/../public/assets/italian.jpg");
  background-color: #cccccc;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
</style>
