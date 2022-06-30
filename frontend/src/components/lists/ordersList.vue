<template>
  <div>
    <v-data-table :headers="headers" :items="desserts" class="elevation-1">
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-eye </v-icon>
      </template> 
    </v-data-table>
    <v-dialog v-model="dialog" max-width="500px">
        <v-card>
          <v-card-title>
            <span class="text-h5">coucou les copains</span>
          </v-card-title>
        </v-card>
      </v-dialog>
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
  dialog = false;
  editedIndex= -1;

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

  desserts = [
    {
      _id: 23,
      address: "Frozen Yogurt",
      restaurant: "Frozen Yogurt",
      price: 6.0,
    },
    {
      _id: 23,
      address: "Frozen Yogurt",
      restaurant: "Frozen Yogurt",
      price: 6.0,
    },
    {
      _id: 23,
      address: "Frozen Yogurt",
      restaurant: "Frozen Yogurt",
      price: 6.0,
    },
    {
      _id: 23,
      address: "Frozen Yogurt",
      restaurant: "Frozen Yogurt",
      price: 6.0,
    },
  ];
    @Watch('dialog')
  onChildChanged(val: string) {val || this.close() }

    
  public editItem(item: { _id: number; address: string; restaurant: string; price: number; }) {
    console.log(item);
    this.editedIndex = this.desserts.indexOf(item)
    this.dialog = true;
    console.log(this.dialog)
  }
  public close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedIndex = -1
        })
  }    
}
</script>
<style></style>
