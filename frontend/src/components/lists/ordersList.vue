<template>
    <div>
        <v-data-table
        :headers="headers"
        :items="orders"
        class="elevation-1">
        </v-data-table>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { ordersModel } from '@/model/ordersModel'
import Order from '@/components/cards/order.vue'
@Component({
    components: {
        Order,
    },
})
export default class OrdersList extends Vue {
    @Prop() orders!: ordersModel[]
    public headers= [
        {
          text: 'ID de la commande',
          align: 'start',
          sortable: false,
          value: '_id',
        },
        { text: 'Addresse de livraison', value: 'address' },
        { text: 'Restaurant', value: 'restaurant' },
        { text: 'Prix total', value: 'price' },
    ];
}
</script>
<style>
</style>