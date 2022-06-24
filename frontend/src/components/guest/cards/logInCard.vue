<template>
  <div > 
    <v-card class="logCard" max-width="600">
      <v-card-text>
        <v-form>
          <v-card-title class="justify-center"> CONNEXION </v-card-title>

          <v-col>
            <v-card-actions>
              <v-text-field label="Adresse mail"></v-text-field>
            </v-card-actions>
            <v-card-actions>
              <v-text-field label="Mot de passe"></v-text-field>
            </v-card-actions>
          </v-col>

          <v-row>
            <v-col>
              <v-card-actions>
                <v-btn class="mr-4" type="submit" v-on:click="loginUser()" rounded color="grey darken-2">
                  Se connecter
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-card-actions>
                <v-btn plain x-small>Mot de passe oublié ?</v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-card-actions>
                <v-btn to="/register" plain x-small>Toujours pas de compte ?</v-btn>
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
import UserService from "@/services/UserService";

@Component
export default class LogInCard extends Vue {

  private userService:UserService = new UserService();


  mail = "";
  password = "";

  public loginUser(){

    userStore.dispatch({
      type: "loginUser",
      mail: this.mail,
      password: this.password
    })
    
    this.userService.loginUser();
    
  }
}
</script>

<style scoped>
.logCard {
  margin-top: 50px; 
  margin-left: 100px;
}
.mr-4{
  color: white;
}
</style>
//TODO utiliser Vee Validate pour la validation du form
