<template>
  <div class="signCard">
    <!-- validation observer -->
    <ValidationObserver v-slot="{ handleSubmit }">
      <v-card max-width="600">
        <v-card-text>
          <v-form @submit.prevent="handleSubmit(createUser)">
            <v-card-title v-if="(role = 'client')" class="justify-center">
              INSCRIPTION
            </v-card-title>
            <v-card-title
              v-else-if="(role = 'restaurantOwner')"
              class="justify-center"
            >
              Devenir restaurateur
            </v-card-title>
            <v-card-title
              v-else-if="(role = 'deliveryman')"
              class="justify-center"
            >
              Devenir coursier-livreur
            </v-card-title>

            <v-row>
              <v-col>
                <ValidationProvider
                  name="first_name"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <v-text-field v-model="first_name" label="Nom"></v-text-field>
                  <span>{{ errors[0] }}</span>
                </ValidationProvider>
              </v-col>
              <v-col>
                <ValidationProvider
                  name="last_name"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <v-text-field
                    v-model="last_name"
                    label="Prénom"
                  ></v-text-field>
                  <span>{{ errors[0] }}</span>
                </ValidationProvider>
              </v-col>
            </v-row>
            <v-col>
              <ValidationProvider
                name="mail"
                rules="required"
                v-slot="{ errors }"
              >
                <v-text-field
                  v-model="mail"
                  label="Adresse mail"
                ></v-text-field>
                <span>{{ errors[0] }}</span>
              </ValidationProvider>

              <ValidationProvider
                name="password"
                rules="required"
                v-slot="{ errors }"
                ><v-text-field
                  v-model="password"
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show ? 'text' : 'password'"
                  label="Mot de passe"
                  @click:append="show = !show"
                >
                </v-text-field>
                <span>{{ errors[0] }}</span>
              </ValidationProvider>

              <ValidationProvider
                name="address"
                rules="required"
                v-slot="{ errors }"
              >
                <v-autocomplete
                  v-model="address"
                  :items="items"
                  label="Adresse postale"
                ></v-autocomplete>
                <span>{{ errors[0] }}</span>
              </ValidationProvider>
            </v-col>
            <v-row>
              <v-col>
                <v-card-actions>
                  <ValidationProvider
                    name="phone_number"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <v-text-field
                      v-model="phone_number"
                      label="Numéros de téléphone"
                    ></v-text-field>
                    <span>{{ errors[0] }}</span>
                  </ValidationProvider>
                </v-card-actions>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-card-actions>
                  <v-btn
                    class="mr-4"
                    type="submit"
                    rounded
                    color="grey darken-2"
                  >
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
    </ValidationObserver>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import userStore from "@/store/userStore";
import UserService from "@/services/usersServices";
import { ValidationProvider } from "vee-validate";

@Component
export default class RegisterCard extends Vue {
  @Prop() role!: String;

  private userService: UserService = new UserService();

  show = false;
  test = "0";
  first_name = "";
  last_name = "";
  mail = "";
  password = "";
  phone_number = "";
  address = "";

  items = ["coucou", "hello", "bye"];

  public createUser() {
    userStore.dispatch({
      type: "createUser",
      first_name: this.first_name,
      last_name: this.last_name,
      mail: this.mail,
      password: this.password,
      phone_number: this.phone_number,
      address: this.address,
      role: this.role,
    });

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