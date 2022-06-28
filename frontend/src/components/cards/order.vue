<!-- TODO : voir quels attributs on affiche sur le tableau et qui va lui envoyer la Prop articles-->
<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="articles"
      class="elevation-1">
    </v-data-table>
</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import ArticlesList from "@/components/lists/articlesList.vue";
import { articlesModel } from "@/model/articlesModel";

@Component({
    components: {
        ArticlesList,
    },
})
export default class Order extends Vue {
  @Prop() articles!:articlesModel[] 
  public headers= [
      {
        text: 'Nom de l\'article',
        align: 'start',
        sortable: false,
        value: '_id',
      },
      { text: 'Prix', value: 'price' },
      { text: 'Description', value: 'description' },
  ];

}
</script>
