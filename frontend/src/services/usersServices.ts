import axios, { AxiosRequestConfig } from "axios";
import userStore from "@/store/userStore";
import { usersModel } from "@/model/usersModel";
import qs from "qs"
export default class UserService {

    /*TODO : faire en sorte de pouvoir accéder aux attributs du token de partout (pour rappel, c'est un ptn de string stocké dans document.cookie)
    dans la vue, on aura un truc du style :   /*beforeCreate() {
    if (this.usersServices.get_jwt().type !=='client') {
      // ntr retourne au lobby
      //on fait un redirect vers l'accueil ou la page de connexion
    }
    else{//on charge la page }
        }
    et ici on aura une fonction du style :    
    public get_jwt() {
        return UserService.parseJwt(document.cookie) 
    }*/
    public static parseJwt (token:String) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    
        return JSON.parse(jsonPayload);

    };

    public createUser(user:usersModel): void {
        console.log(JSON.stringify(user))
        axios.post('https://appli.docker.localhost/auth/register',qs.stringify(user), {headers: { 'content-type': 'application/x-www-form-urlencoded' }})
            .then(function (response) {
                
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
            
    }

    public async loginUser(user:usersModel) {

        console.log(JSON.stringify(user))
        await axios.post('https://appli.docker.localhost/auth/login', qs.stringify(user))
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

 
    