<template>
  <div>
    
    <SignInCard/>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SignInCard from "@/components/cards/signInCard.vue";

@Component({
  components: {
    SignInCard,
  },
})
export default class HomeView extends Vue {
}
</script>
<style></style>
