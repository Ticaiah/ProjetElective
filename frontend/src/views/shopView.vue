<template>
  <div class="home">
    <ArticlesList :articles="articles"></ArticlesList>
    <ArticleForm :articles="articles[0]"></ArticleForm>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ArticlesList from '@/components/lists/articlesList.vue'
import { articlesModel} from '@/model/articlesModel';
import ArticleForm from '../components/forms/articleForm.vue';

@Component({
  components: {
    ArticlesList,
    ArticleForm
  },
})
export default class shopView extends Vue {
  public articles: articlesModel[] = [new articlesModel("Test1",50,80,"Bleu","../../assets/Hamburger_(black_bg).jpg"), new articlesModel("Test2",50,80,"rouge","./assets/IMG_20200721_170836_727.jpg")]
 }
</script>
