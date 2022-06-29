<template>
    <div>
        <v-card class="mx-auto" max-width="200">
            <v-img class="article-image" v-bind:src="article.img" max-height="200"></v-img>
            <v-card-title>
                {{ article.name }}
            </v-card-title>
            <v-card-subtitle>
                {{ article.price }} €
            </v-card-subtitle>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="addArticleToCart(article)">
                    Ajouter au panier
                </v-btn>

            </v-card-actions>
            
        </v-card>
    </div>
</template>
<script lang="ts">

import { Vue, Component, Prop } from 'vue-property-decorator'
import {articlesModel} from '@/model/articlesModel'
@Component
export default class Article extends Vue {
    @Prop() article!:articlesModel
    public addArticleToCart(article:articlesModel) {
        window.alert("Article " + article.name +" a été ajouté")
        //utiliser le local storage pour stocker le panier!
        //Parce qu'on ne va pas emit et re-emit vu qu'on a deux composants
    }
}
</script>
<style lang="scss" scoped>
</style>