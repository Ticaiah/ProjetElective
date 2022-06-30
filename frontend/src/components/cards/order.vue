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
import { articlesModel } from "@/model/articlesModel";

@Component({
    components: {
    },
})
export default class Order extends Vue {
  @Prop() articles!:articlesModel[] 
  public headers= [
      {
        text: 'Nom de l\'article',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: 'Prix', value: 'price' }
  ];

}
</script>
