<template>
  <div>
    <p> Hello restaurant {{ $route.params.id }}</p>
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


@Component({
  components: {
    Article
  },
})
export default class RestaurantView extends Vue {
  
    articlesMock:Array<articlesModel> = [
        {
            _id: "1",
            name: "Article 1",
            description: "Description 1",
            price: 1,
            type: "Boisson",
            stock: 1,
            img: "https://picsum.photos/200/300",
            restaurant_id: "1"
        },
        {
            _id: "2",
            name: "Article 2",
            description: "Description 2",
            price: 2,
            type: "Snacks",
            stock: 2,
            img: "https://picsum.photos/200/300",
            restaurant_id: "1"
        },
        {
            _id: "3",
            name: "Article 3",
            description: "Description 3",
            price: 3,
            type: "Dessert",
            stock: 3,
            img: "https://picsum.photos/200/300",
            restaurant_id: "1"
        },
        {
            _id: "4",
            name: "Article 4",
            description: "Description 4",
            price: 4,
            type: "Sauce",
            stock: 4,
            img: "https://picsum.photos/200/300",
            restaurant_id: "1"
        },
        {
            _id: "5",
            name: "Article 5",
            description: "Description 5",
            price: 5,
            type: "Plat",
            stock: 5,
            img: "https://picsum.photos/200/300",
            restaurant_id: "1"
        }

        ];

    public articles:articlesModel[] = new Array<articlesModel>();
    public articlesService = new ArticlesService();
    
    async mounted() {
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
