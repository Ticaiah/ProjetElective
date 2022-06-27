<template>
  <div>
    <p> Hello livreur {{id}} </p>
 
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";


@Component({
  components: {

  },
})
export default class DeliveryHomeView extends Vue {

    id = this.$route.params;

  
}
</script>
<style></style>
