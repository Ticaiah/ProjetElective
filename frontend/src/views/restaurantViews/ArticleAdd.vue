<template>
  <div>
    <ArticleForm></ArticleForm>
  </div>
</template>

<script lang="ts">
// vue d'un restaurant et de ses produits
import { Component, Vue } from "vue-property-decorator";
import ArticleForm from "@/components/forms/articleForm.vue";
import { articlesModel } from "@/model/articlesModel";
import ArticlesService from "@/services/articlesServices";


@Component({
  components: {
    ArticleForm
  },
})
export default class RestaurantHomeView extends Vue {

}
</script>
<style></style>
