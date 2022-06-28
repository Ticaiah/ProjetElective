<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/3.8.95/css/materialdesignicons.css"
    />
    <!-- LA BAR EN HAUT -->
    <v-app-bar app elevate-on-scroll>
      <v-btn icon @click="toggleDrawer()"><v-icon >{{iconLink}}</v-icon></v-btn>
      <router-link class="link" to="/"><v-toolbar-title class="title">CES'EAT</v-toolbar-title></router-link> 
      <v-spacer></v-spacer>
      
      <DisconnectButton v-if="type='restaurantOwner'"/>
      <div v-else>
        <LoginButton/>
        <RegisterButton/>
      </div>
      
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TokenUtils from "@/utils/tokenUtils";
import RegisterButton from "../buttons/registerButton.vue";
import LoginButton from "../buttons/loginButton.vue";
import DisconnectButton from "../buttons/disconnectButton.vue"


@Component({
  components: {
    RegisterButton,
    LoginButton,
    DisconnectButton
  },
})
export default class NavigationBar extends Vue {

  type = TokenUtils.getValueFromTokenFromCookie("type");

  drawer = false;
  get iconLink(){
    return this.$store.state.sidebarStore.toggled ? "mdi-chevron-left" : "mdi-menu"
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
