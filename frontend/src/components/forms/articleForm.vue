<template>
  <v-card>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="article.name"
              label="Nom de l'article"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="article.price"
              :counter="10"
              label="Prix de l'article"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-autocomplete
              v-model="article.type"
              label="type"
              :items="types"
            ></v-autocomplete>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="article.stock"
              label="Nombre d'articles en stock"
              required
            ></v-text-field>
            <v-file-input accept="image/*" v-model="image" show-size truncate-length="20" label="Image du produit"></v-file-input>
          </v-col>
          <v-btn color="success" class="mr-4" @click="create"> Create </v-btn>
          <!-- Mettre le path de l'image
             <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="article.img"
            label="Chemin du fichier d'image"
            required
          ></v-text-field>
        </v-col>
        -->
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>

<style>
</style>
<script lang="ts">
import ArticlesService from "@/services/articlesServices";
import { Vue, Component, Prop } from "vue-property-decorator";
import { articlesModel } from "../../model/articlesModel";

@Component
export default class ArticleForm extends Vue {
  public articleService: ArticlesService = new ArticlesService();
  public article: articlesModel = new articlesModel();
  public image = new File([], '');

  public types: string[] = ["Boisson", "Snacks", "Dessert", "Sauce", "Plat"];

  public async create() {
    console.log("article btn");
    console.log(this.article);
    this.article.restaurant_id = this.$route.params.id;
    var articles = await this.articleService.createArticle(this.article, this.image);
    if (articles?.status === 200) {
      this.$router.push({
        name: "restaurant-view",
        params: { id: this.$route.params.id },
      });
    }
    console.log("articles");
    console.log(articles);
    window.alert("Article " + this.article.name + " a été ajouté");
    //utiliser le local storage pour stocker le panier!
    //Parce qu'on ne va pas emit et re-emit vu qu'on a deux composants
  }
}
</script>