<template>
    <div>
        <div v-for="restaurant in restaurants" :key="restaurant">
            <Restaurant :restaurant="restaurant"></Restaurant>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { restaurantsModel } from '@/model/restaurantsModel'
import Restaurant from '@/components/cards/restaurantCard.vue'
@Component({
    components: {
        Restaurant,
    },
})
export default class RestaurantList extends Vue {
    @Prop() restaurants!: restaurantsModel[]
}
</script>
<style>
</style>