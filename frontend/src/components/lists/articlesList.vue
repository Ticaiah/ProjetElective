<template>
    <div>
        <div v-for="article in articles" :key="article">
            <Article :article="article"></Article>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { articlesModel } from '@/model/articlesModel'
import Article from '@/components/cards/article.vue'
@Component({
    components: {
        Article,
    },
})
export default class ArticlesList extends Vue {
    @Prop() articles!: articlesModel[]
}
</script>
<style>
</style>