<template>
  <div id="app">
    <Navigation />
  </div>
</template>

<script lang="ts">
import Navigation from "@/components/navigation.vue";
import { Vue, Component } from "vue-property-decorator";

@Component({
  components: {
    Navigation,
  },
})
export default class Test extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  
}
</style>
