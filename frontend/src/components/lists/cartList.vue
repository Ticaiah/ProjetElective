<template>
    <v-layout v-if="this.$store.state.basketStore.articles" wrap justify-space-around>
        <v-flex class="pa-6" v-for="(article, index) in this.$store.state.basketStore.articles" :key="index">
            <ArticleCart :article="article" :index="index"></ArticleCart>
        </v-flex>
    <v-btn depressed rounded @click="validateCart" color="red">Valider le panier</v-btn>
    </v-layout>
</template>


<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { articlesModel } from '@/model/articlesModel'
import ArticleCart from '@/components/cards/articleCart.vue'
import OrdersService from '@/services/ordersServices'
import { ordersModel } from '@/model/ordersModel'
@Component({
    components: {
        ArticleCart,
    },
})
export default class CardList extends Vue {
    private articles!:articlesModel[]
    private ordersService!: OrdersService;
    private order!:ordersModel;

    /*mounted() {
        console.log("coucou");
        console.log(this.$store.state.basketStore.articles);
    }*/
    async validateCart () {
        this.articles = this.$store.state.basketStore.articles;
        this.order = new ordersModel();
        let price = 0
        for (let i =0 ; i<this.articles.length;i++) {
            price += this.articles[i].price
        }
        this.order.total_price=price;
        this.order.user_id = this.$store.state.userStore.auth.id;
        this.order.articles_list=this.articles;
        this.ordersService = new OrdersService();
        this.ordersService.createOrder(this.order)
    }
}
 </script>
<style> </style>

