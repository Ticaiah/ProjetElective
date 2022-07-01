<template>
    <div class="signCard">
        <v-card max-width="600">
            <v-card-text>
                <v-form ref="form" @submit.prevent="createRestaurant">
                    <v-card-title class="justify-center"> Création du restaurant </v-card-title>
                    <v-row>
                        <v-col>
                            <v-text-field :rules="requiredRules" v-model="restaurant.name" label="Nom du restaurant"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-textarea :rules="requiredRules" v-model="restaurant.description" label="Description"></v-textarea>
                        </v-col>
                    </v-row>
                    <v-col>
                        <v-text-field :rules="requiredRules" v-model="restaurant.address" label="Adresse du restaurant">
                        </v-text-field>
                        <v-text-field :rules="postcodeRules" v-model="restaurant.cp" type="number" label="Code postal"></v-text-field>
                        <v-text-field :rules="requiredRules" v-model="restaurant.city" label="Ville"></v-text-field>
                        <v-file-input accept="image/*" v-model="image" show-size truncate-length="20" label="Image du restaurant"></v-file-input>
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
    requiredRules = [
        (v:string) => !!v || 'Requis',
        (v:string) => v?.length <= 100 || 'Must be less than 100 characters',
    ];

    postcodeRules = [
        (v:string) => !!v || 'Requis',
        (v:string) => v?.length === 5 || 'Must be 5 characters',
    ];

    private restaurantService: RestaurantsService = new RestaurantsService();
    public restaurant: restaurantsModel = new restaurantsModel();
    public image = new File([], '');

    public createRestaurant() {
        if((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
            this.restaurantService.createRestaurant(this.restaurant, this.image);
        }
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