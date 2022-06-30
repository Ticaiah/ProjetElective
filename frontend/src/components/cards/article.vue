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
                <v-btn color="primary" @click="addArticleToCart">
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
    //Onclick, we will add the article in the basket
    public addArticleToCart() {
        window.alert("Article " + this.article.name +" a été ajouté")
        this.$store.dispatch("addArticleToBasket", this.article);
    }
}
</script>
<style lang="scss" scoped>
</style>