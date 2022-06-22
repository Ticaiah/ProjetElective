<template>
    <v-app>
      <Navigation @DrawerToggled="onDrawerToggled($event)"/>
      <SideBar :drawer="drawer"/>

    <!-- TOUT LE CONTENU -->
    <v-main class="homepage">
      <router-view />
    </v-main>
    
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Navigation from "./components/navigation/navigation.vue";
import SideBar from "@/components/navigation/sidebar.vue"

@Component({
  components: {
    Navigation,
    SideBar,
  },
})
export default class Test extends Vue {
  drawer = false;
  public onDrawerToggled(drawer:boolean){
      this.drawer = drawer;
  }
}
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
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

}
</style>
