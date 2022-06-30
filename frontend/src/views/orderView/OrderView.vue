<template>
  <div>
    <OrdersList :orders="Orders"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import OrdersList from "@/components/lists/ordersList.vue";
import {ordersModel } from "@/model/ordersModel";
import OrdersService from "@/services/ordersServices";

@Component({
  components: {
    OrdersList,
  },
})

export default class OrderView extends Vue {

  Orders : ordersModel[] = new Array<ordersModel>();
  ordersServices:OrdersService = new OrdersService();

  async created () {
    let Orders = await this.ordersServices.getUserOrders();
    if (Orders) {
      this.Orders = Orders;
    }
      console.log("orders");
      console.log(this.Orders);
  }
}
</script>
<style></style>
