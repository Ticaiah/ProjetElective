<template>
  <div class="home">
    <ArticleList :articles="articles"></ArticleList>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ArticleList from '@/components/articleList.vue'
import { articlesModel, article } from '@/model/articlesModel';

@Component({
  components: {
    ArticleList,
  },
})
export default class shopView extends Vue {
  public articles: articlesModel[] = [new articlesModel("Test1",50,80,"Bleu",'/Hamburger_(black_bg).jpg'), new articlesModel("Test2",50,80,"rouge","./IMG_20200721_170836_727.jpg")]
 }
</script>
