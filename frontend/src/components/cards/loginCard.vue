<template>
  <div>
    <v-card class="logCard" max-width="600">
      <v-card-text>
        <v-form @submit.prevent="loginUser">
          <v-card-title class="justify-center"> CONNEXION </v-card-title>

          <v-col>
            <v-card-actions>
              <v-text-field
                v-model="user.mail"
                label="Adresse mail"
              ></v-text-field>
            </v-card-actions>
            <v-card-actions>
              <v-text-field
                v-model="user.password"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show ? 'text' : 'password'"
                label="Mot de passe"
                @click:append="show = !show"
              >
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
                <v-btn to="/register" plain x-small
                  >Toujours pas de compte ?</v-btn
                >
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
import UserService from "@/services/usersServices";
import { usersModel } from "@/model/usersModel";
import CookieUtils from "@/utils/cookieUtils";
import TokenUtils from "@/utils/tokenUtils";

@Component
export default class LoginCard extends Vue {
  private userService: UserService = new UserService();
  public user: usersModel = new usersModel();
  show = false;

  // on submit, log the user
  public async loginUser() {
    //send credentials to the API
    let token:string = await this.userService.loginUser(this.user);
    //store the sent token in cookies
    if (token)
    {
      this.$store.dispatch("setToken", token);
      CookieUtils.setCookie("token", token);

      //redirect user to the right page accordinf to his user type
      let type = TokenUtils.getValueFromToken(token, "type");
      
      if(type == "client"){
          this.$router.push({name: 'client-home'})
      }
      else if(type == "restaurantOwner"){
          this.$router.push({name: 'restaurant-home'})
      }
      else{
          this.$router.push({name: 'delivery-home'})
      }
    }
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
