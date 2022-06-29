<template>
  <div class="signCard">
    <v-card max-width="600">
      <v-card-text>
        <v-form ref="form" @submit.prevent="createUser">
          <v-card-title v-if="role === 'client'" class="justify-center">
            INSCRIPTION
          </v-card-title>
          <v-card-title
            v-else-if="role === 'restaurantOwner'"
            class="justify-center"
          >
            Devenir restaurateur
          </v-card-title>
          <v-card-title
            v-else-if="role === 'deliveryman'"
            class="justify-center"
          >
            Devenir coursier-livreur
          </v-card-title>

          <v-row>
            <v-col>
              <v-text-field
                :rules="requiredRules"
                v-model="user.last_name"
                label="Nom"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                :rules="requiredRules"
                v-model="user.first_name"
                label="Prénom"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-col>
            <v-text-field
              :rules="emailRules"
              v-model="user.mail"
              label="Adresse mail"
            ></v-text-field>

            <v-text-field
              :rules="requiredRules"
              v-model="user.password"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show ? 'text' : 'password'"
              label="Mot de passe"
              @click:append="show = !show"
            >
            </v-text-field>

            <v-text-field
              :rules="passwordMatchesRules"
              label="Confirmez mot de passe"
              type="password"
            ></v-text-field>

            <v-text-field
              :rules="addressRules"
              v-model="user.address"
              label="Adresse postale"
            ></v-text-field>
          </v-col>
          <v-row>
            <v-col>
              <v-card-actions>
                <v-text-field
                  :rules="phoneNumberRule"
                  v-model="user.phone_number"
                  label="Numéros de téléphone"
                ></v-text-field>
              </v-card-actions>
            </v-col>
          </v-row>
          <v-row>
            <!-- Print error messages -->
            <v-col v-if="error">
              <v-card-actions>
                <v-alert value="error" color="error" icon="warning" close
                  >{{ error }}</v-alert
                >
              </v-card-actions>
            </v-col>
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
import { AxiosError, AxiosRequestTransformer } from "axios";

@Component
export default class RegisterCard extends Vue {
  @Prop() role!: string;

  private userService: UserService = new UserService();
  public user: usersModel = new usersModel();
  show = false;
  requiredRules = [
    (v: string) => !!v || "Requis",
    (v: string) => v?.length <= 50 || "Must be less than 50 characters",
  ];
  addressRules = [
    (v: string) => !!v || "Requis",
    (v: string) => v?.length <= 100 || "Must be less than 100 characters",
  ];

  passwordMatchesRules = [
    (v: string) => !!v || "Requis",
    (v: string) => v == this.user.password || "Passwords should match",
  ];

  emailRules = [
    (v: string) => !!v || "Requis",
    (v: string) =>
      v?.match(/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/i) != null ||
      "Email invalide",
  ];

  phoneNumberRule = [
    (v: string) => !!v || "Requis",
    (v: string) => v?.match(/^\+?[0-9]{10,15}$/) != null || "Numéro invalide",
  ];

  error: string = "";

  public async createUser() {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      this.user.type = this.role;
      let response = await this.userService.createUser(this.user);
        if (response.status === 200) {
          this.$router.push("/login");
        } else {
          this.error = "NON";
        }
    }
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