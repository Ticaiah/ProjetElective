<template>
  <div class="signCard">
    <v-card max-width="600">
      <v-card-text>
        <v-form @submit.prevent="createUser">
          <v-card-title class="justify-center"> INSCRIPTION </v-card-title>
          <v-row>
            <v-col>
              <v-text-field v-model="first_name" label="Nom"></v-text-field>
            </v-col>
            <v-col>
              <v-text-field v-model="last_name" label="Prénom"></v-text-field>
            </v-col>
          </v-row>
          <v-col>
            <v-text-field v-model="mail" label="Adresse mail"></v-text-field>

            <v-text-field v-model="password" 
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" 
            :type="show ? 'text' : 'password'"
            label="Mot de passe"
            @click:append="show = !show">
            </v-text-field>

            <v-text-field label="Confirmez mot de passe"></v-text-field>

            <v-autocomplete v-model="address" :items="items" label="Adresse postale"></v-autocomplete>
          </v-col>
          <v-row>
            <v-col>
              <v-card-actions>
                <v-text-field v-model="phone_number" label="Numéros de téléphone"></v-text-field>
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

import { Vue, Component } from "vue-property-decorator";
import userStore from "@/store/userStore";
import UserService from "@/services/usersServices";

@Component
export default class SignInCard extends Vue {

  private userService:UserService = new UserService();

  show = false;

  first_name= "";
  last_name = "";
  mail = "";
  password = "";
  phone_number = "";
  address = "";
  type = "client";

  items = ["coucou","hello", "bye"];

  public createUser(){

    userStore.dispatch({
      type: "createUser",
      first_name: this.first_name,
      last_name: this.last_name,
      mail: this.mail,
      password: this.password,
      phone_number: this.phone_number,
      address: this.address,
      type2 :this.type,

    })
    
    this.userService.createUser();
    
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
