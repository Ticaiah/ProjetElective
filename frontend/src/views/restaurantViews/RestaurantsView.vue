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
    public restaurants:restaurantsModel[] = new Array<restaurantsModel>();
    
    async mounted() {
        this.restaurantsService = new RestaurantsService();
        var restaurants = await this.restaurantsService.getRestauratorRestaurants();
        if (restaurants) {
            this.restaurants = restaurants;
        }
        console.log("cousdioh" + this.restaurants);
    }
 }
</script>