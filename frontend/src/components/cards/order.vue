<template>
  <div>
    <v-card     
    class="mx-auto my-12"
    max-width="374">
    
    <!-- <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img> -->

    <v-card-title>{{order.}}</v-card-title>
    <v-card-text>
        <div>Prix total : {{order.total_price}}</div>
    </v-card-text>
    <v-card-text>
        <div>Prix de la livraison : {{order.delivery_price}}</div>
    </v-card-text>
    <ArticleList :articles="order.articles_list"></ArticleList>
    <!--<v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="listArticles"
      >
        Afficher les articles
      </v-btn>
    </v-card-actions>-->
    </v-card>
</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { ordersModel } from "@/model/ordersModel";
import ArticlesList from "@/lists/articleList.vue";

@Component({
    components: {
        ArticlesList,
    },
})
export default class Order extends Vue {
  @Prop() order!:ordersModel

  public listArticles()
  {
    window.alert("Réservé!")
  }
}
</script>
