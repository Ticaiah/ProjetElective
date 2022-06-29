<template>
  <div>
    <p> Hello restaurant {{ $route.params.id }}</p>
    <!-- vuetify list -->
    <v-layout wrap justify-space-around>
        <v-flex v-for="article in articles" :key="article._id" class="pa-6">
            <Article :article="article"></Article>

        </v-flex>
    </v-layout>

  </div>
</template>

<script lang="ts">
// vue d'un restaurant et de ses produits
import { Component, Vue } from "vue-property-decorator";
import Article from "@/components/cards/article.vue";
import { articlesModel } from "@/model/articlesModel";


@Component({
  components: {
    Article
  },
})
export default class RestaurantHomeView extends Vue {
    articles:Array<articlesModel> = [
        {
            _id: "1",
            titreArticle: "Article 1",
            Prix: 10,
            Quantité: 10,
            img: "https://picsum.photos/200/300",
        },
        {
            _id: "2",
            titreArticle: "Article 2",
            Prix: 20,
            Quantité: 10,
            img: "https://picsum.photos/200/300",
        },
        {
            _id: "3",
            titreArticle: "Article 3",
            Prix: 30,
            Quantité: 10,
            img: "https://picsum.photos/200/300",
        },
        {
            _id: "4",
            titreArticle: "Article 4",
            Prix: 40,
            Quantité: 10,
            img: "https://picsum.photos/200/300",
        },
        {
            _id: "5",
            titreArticle: "Article 5",
            Prix: 50,
            Quantité: 10,
            img: "https://picsum.photos/200/300",
        },
        ];
}
</script>
<style></style>
