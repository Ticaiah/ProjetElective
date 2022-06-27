<template>
  <div>
    
    <RegisterCard :role="role"/>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import RegisterCard from "@/components/cards/registerCard.vue";

@Component({
  components: {
    RegisterCard,
  },
})
export default class RegisterView extends Vue {
  role = "client";
}
</script>
<style></style>
