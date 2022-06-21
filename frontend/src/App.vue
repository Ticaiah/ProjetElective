<template>
  <div id="app">
    <NavigationBars />
  </div>
</template>

<script lang="ts">
import NavigationBars from "@/components/navigationBars.vue";
import { Vue, Component } from "vue-property-decorator";

@Component({
  components: {
    NavigationBars,
  },
})
export default class Test extends Vue {}
</script>
