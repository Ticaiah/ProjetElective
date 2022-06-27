<template>
  <div>
    <p> Hello{{id}} </p>
 
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";


@Component({
  components: {

  },
})
export default class ClientHomeView extends Vue {

    id = this.$route.params;

  
}
</script>
<style></style>
