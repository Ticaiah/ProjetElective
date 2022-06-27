<template>
  <div>
    <p> Hello restaurant {{id}} </p>
 
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";


@Component({
  components: {

  },
})
export default class RestaurantHomeView extends Vue {

    id = this.$route.params;

  
}
</script>
<style></style>
