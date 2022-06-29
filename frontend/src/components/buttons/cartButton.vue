<template>
  <v-btn to="/my-cart"  elevation="1" rounded>
    <v-icon left> 0 </v-icon>
    Panier
  </v-btn>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";


@Component
export default class CartButton extends Vue {
 
}
</script>

<style>

</style>
