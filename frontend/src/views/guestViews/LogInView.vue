<template>
  <div>
    <LogInCard/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LogInCard from "@/components/guest/cards/logInCard.vue";
import store from "@/store/index";

@Component({
  components: {
    LogInCard,
  },
})
export default class HomeView extends Vue {
  logInCardisShown = store.state.logInCardisShown;
}
</script>
<style></style>
