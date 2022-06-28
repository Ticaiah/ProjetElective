<template>
  <div>
    <OrdersList :orders="Orders"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import OrdersList from "@/components/lists/ordersList.vue";
import { ordersModel } from "@/model/ordersModel";
import OrdersService from "@/services/ordersServices";

@Component({
  components: {
    OrdersList,
  },
})

export default class OrderView extends Vue {
  Orders : ordersModel[] = new Array<ordersModel>();
  ordersServices:OrdersService = new OrdersService();
  /*
  pour tester en local :
  article1 : articlesModel = new articlesModel();
  article2 : articlesModel = new articlesModel();*/
  created () {
    /* mettre l'id de l'utilisateur dans le getOrders()
    this.Orders = this.ordersServices.getOrders()
    /*
    sinon pour tester en local : 
    this.Orders[0] = new ordersModel();
    this.Orders[1] = new ordersModel();
    this.Orders[0]._id="ocvjsoievhcboklezv"
    this.article1.Prix = 50;
    this.article1.titreArticle = "kebabsamer";
    this.article2.Prix = 70;
    this.article2.titreArticle = "tacossagranmere";
    this.Orders[0].articles_list = [this.article1, this.article2];
    this.Orders[1].articles_list = [this.article2, this.article1];*/

  }
}
</script>
<style></style>
