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
                <v-btn color="error" @click="deleteArticleFromCart">
                    Supprimer du panier
                </v-btn>

            </v-card-actions>
            
        </v-card>
    </div>
</template>
<script lang="ts">

import { Vue, Component, Prop } from 'vue-property-decorator'
import {articlesModel} from '@/model/articlesModel'
@Component
export default class ArticleCart extends Vue {
    @Prop() article!:articlesModel
    @Prop() index!:number
    //Onclick, we will add the article in the basket
    public deleteArticleFromCart() {
        window.alert("Article " + this.article.name +" supprimé")
        this.$store.dispatch("deleteArticleToBasket", this.index);
    }
}
</script>
<style lang="scss" scoped>
</style>