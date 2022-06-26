<template>
    <div class="signCard">
        <v-card max-width="600">
            <v-card-text>
                <v-form @submit.prevent="createRestaurant">
                    <v-card-title class="justify-center"> Création du restaurant </v-card-title>
                    <v-row>
                        <v-col>
                            <v-text-field v-model="restaurant.name" label="Nom du restaurant"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field v-model="restaurant.description" label="Description"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-col>
                        <v-text-field v-model="restaurant.address" label="Adresse du restaurant">
                        </v-text-field>
                        <v-text-field v-model="restaurant.cp" label="Code postal"></v-text-field>
                        <v-text-field v-model="restaurant.city" label="Ville"></v-text-field>
                    </v-col>
                    <v-row>
                        <v-col>
                            <v-card-actions>
                                <v-btn class="mr-4" type="submit" rounded color="grey darken-2">
                                    Créer le restaurant
                                </v-btn>
                            </v-card-actions>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
        </v-card>
    </div>
</template>

<script lang="ts">

import { Vue, Component } from "vue-property-decorator";
import RestaurantsService from "@/services/restaurantsService";
import { restaurantsModel } from "@/model/restaurantsModel";

@Component
export default class RestaurantForm extends Vue {

    private restaurantService: RestaurantsService = new RestaurantsService();
    public restaurant: restaurantsModel = new restaurantsModel("", "", 0, "", 0, "");

    public createRestaurant() {
        this.restaurantService.createRestaurant(this.restaurant);
    }
}
</script>

<style scoped>
.signCard {
    margin-top: 50px;
    margin-left: 100px;
    opacity: 1;
}

.mr-4 {
    color: white;
}
</style>