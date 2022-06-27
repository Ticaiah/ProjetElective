<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-list-item-group>
      <v-list-item>
        <RegisterButton2 />
      </v-list-item>
      <v-list-item>
        <LoginButton2 />
      </v-list-item>
    </v-list-item-group>
    <v-list-item-group v-for="link in links" :key="link.route">
      <v-list-item :to="link.route">
        <v-list-item-title>{{ link.title }}</v-list-item-title>
      </v-list-item>
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
    @Prop({default:false}) drawer!: boolean;

    links = [
        {
        route: "/restaurant/register",
        title: "Devenir restaurateur",
        },
        {
        route: "/about",
        title: "Devenir coursier/livreur",
        },
        // {
        // route: "/shop",
        // title: "Shop",
        // },
    ];
    }
</script>
