<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-list-item-group>
      <v-list-item>
        <SignInButton2 />
      </v-list-item>
      <v-list-item>
        <LogInButton2 />
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
    import SignInButton2 from "../buttons/signInButton2.vue";
    import LogInButton2 from "../buttons/LogInButton2.vue";

    @Component({
    components: {
        SignInButton2,
        LogInButton2,
    },
    })
    export default class SideBars extends Vue {
    @Prop({default:false}) drawer!: boolean;

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
