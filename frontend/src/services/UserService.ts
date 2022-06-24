import axios, { AxiosRequestConfig } from "axios";
import userStore from "@/store/userStore";


export default class UserService {
    public createUser(): void {
        axios.post('https://appli.docker.localhost/auth/register', {
                first_name: userStore.state.user.first_name,
                last_name: userStore.state.user.last_name,
                mail: userStore.state.user.mail,
                password: userStore.state.user.password,
                phone_number: userStore.state.user.phone_number,
                address: userStore.state.user.address,
                // TODO récupérer depuis le store
                postcode: 4300,
                city: "TEst",
                type: userStore.state.user.type
            })
            .then(function (response) {
                //if response is ok, we save the token in the store
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
            
    }

    public loginUser(): void{
        //TODO: faire la fonction
        axios.post('https://appli.docker.localhost/auth/login', {
                mail: userStore.state.login.login,
                password: userStore.state.login.password
            })
            .then(function (response) {
                //if response is ok, we save the token in the store
                //TODO update token in store
                // response.data.token
                console.log(response);
            }
            ).catch(function (error) {
                console.log(error);
            }
            );
    }
}

 
    