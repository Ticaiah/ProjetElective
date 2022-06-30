
<template>
<div>
  <p>Mon panier</p>
  <CartList></CartList>
</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CartList from "@/components/lists/cartList.vue"

@Component({
  components: {
    CartList
  },
})
export default class CartView extends Vue {
  

  
}
</script>
<style>

</style>
