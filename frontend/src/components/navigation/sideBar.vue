<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-list-item-group>
      <div v-if="!$store.state.userStore.auth.connected">
        <v-list-item>
          <RegisterButton2 />
        </v-list-item>
        <v-list-item>
          <LoginButton2 />
        </v-list-item>
      </div> 
      <v-list-item-group v-for="link in links" :key="link.route">
          <v-list-item v-if="$store.state.userStore.auth.role == link.userType" :to="link.route">
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
    </v-list-item-group>
    
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import RegisterButton2 from "../buttons/registerButton2.vue";
import LoginButton2 from "../buttons/loginButton2.vue";

@Component({
  components: {
    RegisterButton2,
    LoginButton2,
  },
})
export default class SideBar extends Vue {
  get drawer() {
    return this.$store.state.sidebarStore.toggled;
  }
  set drawer(value) {
    this.$store.dispatch("toggleSidebar", value);
  }

  links = [
    {
      route: "/restaurant/register",
      title: "Devenir restaurateur",
      userType: "guest"
    },
    {
      route: "/delivery/register",
      title: "Devenir coursier/livreur",
      userType: "guest"
    },
    {
      route: "/create-restaurant",
      title: "Créer restaurant",
      userType: "restaurantOwner"
    },
    {
      route: "/restaurants-list",
      title: "Liste des restaurants",
      userType: "restaurantOwner"
    },
    // {
    // route: "/shop",
    // title: "Shop",
    // },
  ];
}
</script>
