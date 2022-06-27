<template>
  <v-form v-model="article">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="article.titreArticle"
            label="Nom de l'article"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="article.Prix"
            :counter="10"
            label="Prix de l'article"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="article.Quantité"
            label="Nombre d'articles en stock"
            required
          ></v-text-field>
        </v-col>
        <v-btn
          color="success"
          class="mr-4"
          @click="validate"
        >
          Validate
        </v-btn>
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
</template>

<style>
</style>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import {articlesModel} from '../../model/articlesModel'
@Component
export default class ArticleForm extends Vue {
    @Prop() article!:articlesModel
    public validate(article:articlesModel) {
        window.alert("Article " + article.titreArticle +" a été ajouté")
        //utiliser le local storage pour stocker le panier!
        //Parce qu'on ne va pas emit et re-emit vu qu'on a deux composants
    }
}
</script>