<template>
  <div class="signCard">
    <v-card max-width="600">
      <v-card-text>
        <v-form @submit.prevent="createUser">
          <v-card-title v-if="role === 'client' " class="justify-center"> INSCRIPTION </v-card-title>
          <v-card-title v-else-if="role ==='restaurantOwner' " class="justify-center"> Devenir restaurateur </v-card-title>
          <v-card-title v-else-if="role === 'deliveryman' " class="justify-center"> Devenir coursier-livreur </v-card-title>

          <v-row>
            <v-col>
              <v-text-field v-model="user.first_name" label="Nom"></v-text-field>
            </v-col>
            <v-col>
              <v-text-field v-model="user.last_name" label="Prénom"></v-text-field>
            </v-col>
          </v-row>
          <v-col>
            <v-text-field v-model="user.mail" label="Adresse mail"></v-text-field>

            <v-text-field v-model="user.password" 
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" 
            :type="show ? 'text' : 'password'"
            label="Mot de passe"
            @click:append="show = !show">
            </v-text-field>

            <v-text-field label="Confirmez mot de passe"></v-text-field>

            <v-autocomplete v-model="user.address" :items="items" label="Adresse postale"></v-autocomplete>
          </v-col>
          <v-row>
            <v-col>
              <v-card-actions>
                <v-text-field v-model="user.phone_number" label="Numéros de téléphone"></v-text-field>
              </v-card-actions>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-card-actions>
                <v-btn class="mr-4" type="submit" rounded color="grey darken-2">
                  S'inscrire
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-card-actions>
                <v-btn to="/log-in" plain x-small>Déjà un compte ?</v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">

import { Vue, Component, Prop } from "vue-property-decorator";
import UserService from "@/services/usersServices";
import { usersModel } from "@/model/usersModel";

@Component
export default class RegisterCard extends Vue {

  @Prop() role!: String;

  private userService:UserService = new UserService();
  public user:usersModel = new usersModel();
  show = false;
  items = ["coucou","hello", "bye"];

  public createUser(){
    this.userService.createUser(this.user);
    this.$router.push({ path: "/login" }); //TODO seulement si l'inscription a
  }
}
</script>

<style scoped>
.signCard {
  margin-top: 50px;
  margin-left: 100px;
  opacity: 1;
}
.mr-4 {
  color: white;
}
</style>
//TODO utiliser Vee Validate pour la validation du form