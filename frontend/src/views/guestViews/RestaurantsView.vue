<template>
  <div class="home">
    <RestaurantList :restaurants="restaurants"></RestaurantList>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import RestaurantList from '@/components/lists/restaurantsList.vue'
import { IRestaurant, restaurantsModel} from '@/model/restaurantsModel';
import RestaurantsService from '@/services/restaurantsService';

@Component({
  components: {
    RestaurantList,
  },
})
export default class shopView extends Vue {
    private restaurantsService!: RestaurantsService;
    public restaurants!:IRestaurant[]
    
    async beforeMount() {
        this.restaurantsService = new RestaurantsService();
        this.restaurants = await this.restaurantsService.getRestaurants();
        console.log("cousdioh" + this.restaurants);
    }
 }
</script>