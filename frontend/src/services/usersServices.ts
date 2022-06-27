import axios, { AxiosRequestConfig } from "axios";
import userStore from "@/store/userStore";
import jwt, { decode } from "jsonwebtoken";

export default class UserService {

    public static parseJwt (token:String) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    
        return JSON.parse(jsonPayload);

    };

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
                role: userStore.state.user.role
            })
            .then(function (response) {
                
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
            
    }

    public async loginUser() {

        await axios.post('https://appli.docker.localhost/auth/login', {
                mail: userStore.state.login.login,
                password: userStore.state.login.password
            })
            .then(function (response) {

                if(response.data.token) {
                  
                    let decoded = UserService.parseJwt(response.data.token);
                    
                    userStore.dispatch({
                        type: "storeToken",
                        token: response.data.token,
                        id : decoded.id,
                        role: decoded.type
                    })
                    

                }
                else {
                    console.log("pas de token reçu")
                }

                console.log(response);

            }
            ).catch(function (error) {
                console.log(error);
            }
            );
    }

    
}

 
    