<template>
    <div class="signCard">
        <v-card max-width="1000">
            <v-card-text>
                <v-form>
                    <v-card-title class="justify-center"> Mon compte </v-card-title>
                    <v-row>
                        <v-col>
                            <v-text-field  label="Nom"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field  label="Prénom"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-col>
                        <v-text-field  label="Adresse mail"></v-text-field>
                        <v-row>
                        <v-col>
                            <v-text-field  label="Adresse"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field  label="Code postal"></v-text-field>
                        </v-col>
                    </v-row>
                        <v-text-field label="Ville"></v-text-field>
                    </v-col>
                    <v-row>
                        <v-col>
                            <v-card-actions>
                                <v-btn class="mr-4" type="submit" rounded color="grey darken-2">
                                    Enregistrer
                                </v-btn>
                            </v-card-actions>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
        </v-card>
    </div>
</template>

<script lang="ts">

import { Vue, Component } from "vue-property-decorator";

@Component
export default class UserAccountForm extends Vue {
    //TODO

}
</script>

<style scoped>
.signCard {
    margin-top: 50px;
    margin-left: 500px;
    opacity: 1;
}

.mr-4 {
    color: white;
}
</style>
