<template>
    <v-layout v-if="this.$store.state.basketStore.articles" wrap justify-space-around>
        <v-flex class="pa-6" v-for="article in this.$store.state.basketStore.articles">
            <Article :article="article"></Article>
        </v-flex>
    <v-btn depressed rounded text @click="validateCart" color="red">Valider le panier</v-btn>
    </v-layout>
</template>


<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { articlesModel } from '@/model/articlesModel'
import Article from '@/components/cards/article.vue'
import OrdersService from '@/services/ordersServices'
import { ordersModel } from '@/model/ordersModel'
@Component({
    components: {
        Article,
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
        console.log(this.articles)
        this.order = new ordersModel();
        let price = 0
        for (let i =0 ; i<this.articles.length;i++) {
            price += this.articles[i].price
        }
        console.log("prix : "+price)
        this.order.total_price=price;
        this.order.user_id = this.$store.state.userStore.auth.id
        this.order.articles_list=this.articles
        console.log(this.order)
        this.ordersService = new OrdersService();
        this.ordersService.createOrder(this.order)
    }
}
 </script>
<style> </style>

