<template>
  <div class="home">
    <RestaurantList :restaurants="restaurants"></RestaurantList>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import RestaurantList from '@/components/lists/restaurantsList.vue'
import { restaurantsModel} from '@/model/restaurantsModel';
import RestaurantsService from '@/services/restaurantsService';

@Component({
  components: {
    RestaurantList,
  },
})
export default class shopView extends Vue {
    private restaurantsService!: RestaurantsService;
    public restaurants!:restaurantsModel[]
    beforeCreate() {
        this.restaurantsService = new RestaurantsService();
        this.restaurants = this.restaurantsService.getRestaurants(0);//le paramètre est l'user_id
    }
 }
</script>