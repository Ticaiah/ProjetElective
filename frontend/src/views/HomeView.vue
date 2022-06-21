<template>
  <div >
    <!-- <Restaurant/> -->
    <SignInCard></SignInCard>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Restaurant from '@/components/cards/restaurantCard.vue'
import SignInCard from '@/components/cards/signInCard.vue'


@Component({
  components: {
    Restaurant,
    SignInCard
  },
})
export default class HomeView extends Vue {
  
 }
</script>