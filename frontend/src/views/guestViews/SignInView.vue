<template>
  <div>
    
    <SignInCard/>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SignInCard from "@/components/guest/cards/signInCard.vue";
import store from "@/store/index";

@Component({
  components: {
    SignInCard,
  },
})
export default class HomeView extends Vue {
  logInCardisShown = store.state.logInCardisShown;
}
</script>
<style></style>
