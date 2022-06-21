<template>
  <div >
    <!-- <Restaurant/> -->
    <!-- <SignInCard></SignInCard> -->
    <LogInCard></LogInCard>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Restaurant from '@/components/cards/restaurantCard.vue'
import SignInCard from '@/components/cards/signInCard.vue'
import LogInCard from '@/components/cards/logInCard.vue'

@Component({
  components: {
    Restaurant,
    SignInCard,
    LogInCard
  },
})
export default class HomeView extends Vue {
  
 }
</script>