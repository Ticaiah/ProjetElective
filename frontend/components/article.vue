<template>
    <div>
        <h1>{{ article.titreArticle }}</h1>
        <img v-bind:src="article.img" class="vuetify-logo" alt="Vuetify Logo">
        <h2>Quantité : {{article.Quantité}} 
        <br>Prix : {{article.Prix}}</h2>
        <button type="button" class="btn btn-primary" v-on:click="ajouterArticle(article)">Ajouter cet article</button>
        <b-alert show variant="warning"> Home - value= {{ article.Compteur }} </b-alert>
    </div>
</template>
<script lang="ts">

import { Vue, Component, Prop } from 'vue-property-decorator'
import {articlesModel} from '../model/articlesModel'
@Component
export default class Article extends Vue {
    @Prop() article!:articlesModel
    public ajouterArticle(article:articlesModel) {
        window.alert("Article " + article.titreArticle +" a été ajouté")
        this.$store.commit('increment', 1)
        // chgt de la valeur affichée
        article.Compteur = this.$store.state.counter
        //utiliser le local storage pour stocker le panier!
        //Parce qu'on ne va pas emit et re-emit vu qu'on a deux composants
    }
    created() {
    this.article.Compteur = this.$store.state.counter
    console.log('[home created], value=',this.article.Compteur )
  }
}
</script>
<style></style>