<template>
    <v-btn to="/register" id="inscription" elevation="1" tile color="black" width="100%"> Inscription </v-btn>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class SignInButton extends Vue {
   
}
</script>

<style>
    #inscription{
        margin: 5px;
        color: white !important;
    }
</style>