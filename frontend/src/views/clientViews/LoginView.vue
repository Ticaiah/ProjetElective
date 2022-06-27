<template>
  <div>
    <LoginCard/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LoginCard from "@/components/cards/loginCard.vue";

@Component({
  components: {
    LoginCard,
  },
})
export default class LoginView extends Vue {
}
</script>
<style></style>
