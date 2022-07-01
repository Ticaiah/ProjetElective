<template>
  <div>
    
    <UserAccountForm/>
 
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UserAccountForm from "@/components/forms/userAccountForm.vue"


@Component({
  components: {
    UserAccountForm

  },
})
export default class UserAccountView extends Vue {


  
}
</script>
<style></style>
