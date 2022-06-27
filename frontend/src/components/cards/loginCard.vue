<template>
  <div > 
    <v-card class="logCard" max-width="600">
      <v-card-text>
        <v-form @submit.prevent="loginUser">
          <v-card-title class="justify-center"> CONNEXION </v-card-title>

          <v-col>
            <v-card-actions>
              <v-text-field v-model="mail" label="Adresse mail"></v-text-field>
            </v-card-actions>
            <v-card-actions>
               <v-text-field v-model="password" 
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" 
            :type="show ? 'text' : 'password'"
            label="Mot de passe"
            @click:append="show = !show">
            </v-text-field>
            </v-card-actions>
          </v-col>
          <v-row>
            <v-col>
              <v-card-actions>
                <v-btn class="mr-4" type="submit" rounded color="grey darken-2">
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
import UserService from "@/services/usersServices";

@Component
export default class LoginCard extends Vue {

  private userService:UserService = new UserService();

  show = false;
  mail = "";
  password = "";

// on submit, log the user
  public async loginUser(){

    //set user credentials in the store so we can sent them to the API
    userStore.dispatch({
      type: "loginUser",
      mail: this.mail,
      password: this.password
    })
    
    //send credentials to the API
    await this.userService.loginUser();
    console.log(userStore.state.auth.token);

    //if user is logged (has a token) we store the token in the cookies
    //then it goes to the home page of the user (id)
    if(userStore.state.auth.token){

      this.storeJwtInCookies();

      if(userStore.state.auth.role = "client"){
        this.$router.push({name: 'client-home', params: { id: userStore.state.auth.id }})
      }
      else if(userStore.state.auth.role = "restaurantOwner"){
        this.$router.push({name: 'restaurant-home', params: { id: userStore.state.auth.id }})
      }
      else{
        this.$router.push({name: 'delivery-home', params: { id: userStore.state.auth.id }})
      }
    
      ;
      
    }
    else{
      //afficher "probleme de connexion survenu"
      console.log("ouiu8")
    }
    
  }

  //function that stores the token in the cookies
  public storeJwtInCookies(){
    document.cookie = "token=" + userStore.state.auth.token +";"
                    + "id="+userStore.state.auth.id +";"
                    + "role=" + userStore.state.auth.role +";";
    
  }

  public getCookie(cname:String) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
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
