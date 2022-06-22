<template>
  <div > 
    <v-card class="logCard" max-width="600">
      <v-card-text>
        <v-form>
          <v-card-title class="justify-center"> CONNEXION </v-card-title>

          <v-col>
            <v-card-action>
              <v-text-field label="Adresse mail"></v-text-field>
            </v-card-action>
            <v-card-action>
              <v-text-field label="Mot de passe"></v-text-field>
            </v-card-action>
          </v-col>

          <v-row>
            <v-col>
              <v-card-action>
                <v-btn class="mr-4" type="submit" rounded color="grey darken-2">
                  Se connecter
                </v-btn>
              </v-card-action>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-card-action>
                <v-btn plain x-small>Mot de passe oublié ?</v-btn>
              </v-card-action>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-card-action>
                <v-btn plain x-small>Toujours pas de compte ?</v-btn>
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
export default class LogInCard extends Vue {}
</script>

<style scoped>
.logCard {
  margin-top: 50px; 
  margin-left: 100px;
}
</style>
//TODO utiliser Vee Validate pour la validation du form
