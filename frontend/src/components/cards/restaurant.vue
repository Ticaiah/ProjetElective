<template>
  <div>
    <v-card     
    class="mx-auto my-12"
    max-width="374">
    
    <!-- <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img> -->

    <v-card-title>{{restaurant.name}}</v-card-title>
    <v-card-text>
        <div>{{restaurant.description}}</div>
    </v-card-text>
    <v-card-text>
        <div>{{restaurant.address}} , {{restaurant.cp}} {{restaurant.city}}</div>

    </v-card-text>
    <!--
      TODO : faire des boutons qui seront affichés seulement en cas de modification par le restaurateur
      if this.user.type == restaurateur, alors on affiche des v-card-actions modifier, supprimer, etc
      <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Reserver
      </v-btn>
    </v-card-actions>-->
    </v-card>
</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { restaurantsModel } from "@/model/restaurantsModel";

@Component
export default class Restaurant extends Vue {
  @Prop() restaurant!:restaurantsModel

  public reserve()
  {
    window.alert("Réservé!")
  }
}
</script>
