<template>
    <div>
        <h1>{{ article.titreArticle }}</h1>
        <img :src="article.img"/>
        <h2>Quantité : {{article.Quantité}} 
        <br>Prix : {{article.Prix}}</h2>
        <v-btn elevation="2" v-on:click="ajouterArticle(article)">Ajouter cet article</v-btn>
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
        //utiliser le local storage pour stocker le panier!
        //Parce qu'on ne va pas emit et re-emit vu qu'on a deux composants
    }
}
</script>
<style></style>