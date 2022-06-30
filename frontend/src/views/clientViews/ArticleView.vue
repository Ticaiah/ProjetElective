
<template>
<div>
  <p>Commande chez ...</p>
  <Order :articles="order.articles_list" ></Order>
</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Order from "@/components/cards/order.vue";
import { ordersModel } from "@/model/ordersModel";
import OrdersService from "@/services/ordersServices";

@Component({
  components: {
    Order
  },
})
export default class ArticleView extends Vue {
    order_id = this.$route.params.id;

  order : ordersModel = new ordersModel();
  ordersServices:OrdersService = new OrdersService();

  async created () {
    let order = await this.ordersServices.getUserOrderById(this.order_id);
    if (order) {
      this.order = order;
    }
      console.log("orders");
      console.log(this.order);
  }

  
}
</script>
<style>

</style>
