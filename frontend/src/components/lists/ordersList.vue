<template>
  <div>
    <v-data-table :headers="headers" :items="orders" class="elevation-1">
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="seeArticles(item)"> mdi-eye </v-icon>
      </template> 
    </v-data-table>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { ordersModel } from "@/model/ordersModel";
import Order from "@/components/cards/order.vue";
@Component({
  components: {
    Order,
  },
})
export default class OrdersList extends Vue {
  @Prop() orders!: ordersModel[];

  public headers = [
    {
      text: "ID de la commande",
      align: "start",
      sortable: false,
      value: "_id",
    },
    { text: "Addresse de livraison", value: "address" },
    { text: "Restaurant", value: "restaurant" },
    { text: "Prix total", value: "price" },
    { text: "Actions", value: "actions", sortable: false },
  ];

  public seeArticles(order: any){
    console.log(order._id)
    this.$router.push({name: "order", params: {id: order._id}})

  }

     
}
</script>
<style></style>
