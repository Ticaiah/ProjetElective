<template>
  <div>
 
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import store from "@/store/index";

@Component({
  components: {

  },
})
export default class HomeView extends Vue {
  logInCardisShown = store.state.logInCardisShown;
}
</script>
<style></style>
