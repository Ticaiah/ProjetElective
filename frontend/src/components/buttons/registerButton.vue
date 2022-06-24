<template>
    <v-btn to="/register" id="inscription" elevation="1" rounded color="black" > Inscription </v-btn>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'


@Component
export default class RegisterButton extends Vue {
}
</script>

<style>
    #inscription{
        margin: 5px;
        color: white !important;
    }
</style>