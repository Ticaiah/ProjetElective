<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/3.8.95/css/materialdesignicons.css"
    />
    <!-- LA BAR EN HAUT -->
    <v-app-bar app elevate-on-scroll>
      <v-btn icon @click="toggleDrawer()"><v-icon >{{iconLink}}</v-icon></v-btn>
      <router-link class="link" :to="homelink"><v-toolbar-title class="title">CES'<span style="font-weight:bold;color: #5fb709">EAT</span></v-toolbar-title></router-link> 
      <v-spacer></v-spacer>
      
      <div v-if="$store.state.userStore.auth.role == 'client'">
        <v-row> 
          <CartButton/>   
        </v-row>
      </div>

      <div class="ml-6" v-if="$store.state.userStore.auth.connected">
        <v-row> 
          <DisconnectButton />
        </v-row>
      </div>

      <div v-else>
        <LoginButton/>
        <RegisterButton/>
      </div>
      
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import RegisterButton from "../buttons/registerButton.vue";
import LoginButton from "../buttons/loginButton.vue";
import DisconnectButton from "../buttons/disconnectButton.vue";
import CartButton from "../buttons/cartButton.vue"


@Component({
  components: {
    RegisterButton,
    LoginButton,
    DisconnectButton,
    CartButton
  },
})
export default class NavigationBar extends Vue {

  drawer = false;
  get iconLink(){
    return this.$store.state.sidebarStore.toggled ? "mdi-chevron-left" : "mdi-menu"
  }

  get homelink(){
    switch (this.$store.state.userStore.auth.role) {
      case "client":
        return "/client";
      case "restaurantOwner":
        return "/restaurants-list";
      default:
        return "/";
    }
  }

  public toggleDrawer() {
    this.$store.dispatch("toggleSidebar", !this.$store.state.sidebarStore.toggled);
    // this.$emit("DrawerToggled", !sidebarStore.state.sidebar.toggled);
  }
}
</script>
<style>
  .title{
    color:black;
  }
  .link{
    text-decoration: none;
    
  }
  
</style>
