<template>
  <div>
    <RestaurantForm/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import RestaurantForm from "@/components/forms/restaurantForm.vue";

@Component({
  components: {
    RestaurantForm,
  },
})
export default class createRestaurantView extends Vue {
}
</script>
<style></style>
