<template>
  <div>
    <div style="background-color: white">
        <v-img max-height="150" :src="restaurant.img"><h1 style="background-color: rgba(255, 255, 255, 0.4);">{{ restaurant.name }}</h1></v-img>
        
    </div>
    <!-- vuetify list -->
    <v-layout wrap justify-space-around>
        <v-flex v-for="article in articles" :key="article._id" class="pa-6">
            <Article :article="article"></Article>
        </v-flex>
    </v-layout>

    <v-btn v-if="$store.state.userStore.auth.role == 'restaurantOwner'" @click="addArticle">Ajouter article</v-btn>

  </div>
</template>

<script lang="ts">
// vue d'un restaurant et de ses produits
import { Component, Vue } from "vue-property-decorator";
import Article from "@/components/cards/article.vue";
import { articlesModel } from "@/model/articlesModel";
import ArticlesService from "@/services/articlesServices";
import RestaurantService from "@/services/restaurantsService";
import { restaurantsModel } from "@/model/restaurantsModel";


@Component({
  components: {
    Article
  },
})
export default class RestaurantView extends Vue {
    public articles:articlesModel[] = new Array<articlesModel>();
    public restaurant:restaurantsModel = new restaurantsModel();
    public articlesService = new ArticlesService();
    public restaurantService = new RestaurantService();
    
    async mounted() {
        var restaurant = await this.restaurantService.getRestaurant(this.$route.params.id);

        if (restaurant) {
            this.restaurant = restaurant;
        }

        var articles = await this.articlesService.getArticles(this.$route.params.id);
        if (articles) {
            this.articles = articles;
        }
        console.log("articles");
        console.log(articles);
    }

    addArticle() {
        this.$router.push({ name: "restaurant-add-articles", params: { id: this.$route.params.id } });
    }
}
</script>
<style></style>
