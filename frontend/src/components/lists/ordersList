<template>
    <div>
        <div v-for="order in orders" :key="order">
            <Order :order="order"></Order>
        </div>
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
}
</script>
<style>
</style>