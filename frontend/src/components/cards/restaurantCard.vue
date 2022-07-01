<template>
  <v-card class="mx-auto my-12" max-width="374" :to="{ name: 'restaurant-view', params: { id: restaurant._id }}" >
    <v-img
      height="250"
      :src="restaurant.img"
    ></v-img>

    <v-card-title>{{ restaurant.name }}</v-card-title>

    <v-card-text>
      <div class="my-4 text-subtitle-1">
        • {{ restaurant.address }} , {{ restaurant.cp }} {{ restaurant.city }}
      </div>

      <div>{{ restaurant.description }}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions
      v-if="$store.state.userStore.auth.role == 'restaurantOwner'">
      <v-btn color="indigo" text @click="reserve">
        Modifier
      </v-btn>
      <v-btn color="red" text @click="reserve">
        Supprimer
      </v-btn>
    </v-card-actions>
        <v-card-actions
      v-if="$store.state.userStore.auth.role == 'client'">
      <v-btn color="indigo" text @click="reserve">
        Voir restaurant
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { restaurantsModel } from "@/model/restaurantsModel";

@Component
export default class Restaurant extends Vue {
  @Prop() restaurant!: restaurantsModel;

  public reserve() {
    window.alert("Réservé!");
  }
}
</script>
