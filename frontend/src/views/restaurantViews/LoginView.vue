<template>
  <div>
    <LoginCard/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LogInCard from "@/components/cards/loginCard.vue";

@Component({
  components: {
    LogInCard,
  },
})
export default class HomeView extends Vue {
}
</script>
<style></style>
