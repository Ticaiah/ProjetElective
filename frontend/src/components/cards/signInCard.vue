<template>
  <div class="signCard">
    <v-card max-width="600">
      <v-card-text>
        <v-form>
          <v-card-title class="justify-center"> INSCRIPTION </v-card-title>
          <v-row>
            <v-col>
              <v-card-action>
                <v-text-field label="Nom"></v-text-field>
              </v-card-action>
            </v-col>
            <v-col>
              <v-card-action>
                <v-text-field label="Prénom"></v-text-field>
              </v-card-action>
            </v-col>
          </v-row>
          <v-col>
            <v-card-action>
              <v-text-field label="Adresse mail"></v-text-field>
            </v-card-action>
            <v-card-action>
              <v-text-field label="Mot de passe"></v-text-field>
            </v-card-action>
            <v-card-action>
              <v-text-field label="Confirmez mot de passe"></v-text-field>
            </v-card-action>
            <v-card-action>
              <v-text-field label="Adresse postale"></v-text-field>
            </v-card-action>
          </v-col>
          <v-row>
            <v-col>
              <v-card-action>
                <v-text-field label="Code postale"></v-text-field>
                <v-text-field label="Numéros de téléphone"></v-text-field>
              </v-card-action>
            </v-col>
            <v-col>
              <v-card-action>
                <v-text-field label="Ville"></v-text-field>
              </v-card-action>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-card-action>
                <v-btn class="mr-4" type="submit" rounded color="grey darken-2">
                  S'inscrire
                </v-btn>
              </v-card-action>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-card-action>
                <v-btn plain x-small>Déjà un compte ?</v-btn>
              </v-card-action>
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
export default class SignInCard extends Vue {}
</script>

<style scoped>
.signCard {
  margin-top: 50px;
  margin-left: 100px;
  opacity: 1 ;
}
</style>
//TODO utiliser Vee Validate pour la validation du form
