import axios, { AxiosRequestConfig } from "axios";
import { usersModel } from "@/model/usersModel";
import CookieUtils from "@/utils/cookieUtils";
import TokenUtils from "@/utils/tokenUtils";

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
    
    //create a user
    public createUser(user:usersModel): void {
        console.log(JSON.stringify(user))
        axios.post('https://appli.docker.localhost/auth/register', JSON.stringify(user), { headers: { 'Content-Type': 'application/json' } })
            .then(function (response) {
                
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });           
    }

    //Log user 
    public async loginUser(user:usersModel, router:any) {
        //send credential to api
        console.log(JSON.stringify(user))
        await axios.post('https://appli.docker.localhost/auth/login', JSON.stringify(user), { headers: { 'Content-Type': 'application/json' } })
            .then(function (response) {
                let token = response.data.token;

                if(token) {
                    //store the sent token in cookies
                    CookieUtils.setCookie("token", token);

                    //redirect user to the right page accordinf to his user type
                    let type = TokenUtils.getValueFromToken(token, "type");
                    let id = TokenUtils.getValueFromToken(token, "id");

                    if(type = "client"){
                        router.push({name: 'client-home', params: { id: id }})
                    }
                    else if(type = "restaurantOwner"){
                        router.push({name: 'restaurant-home', params: { id: id}})
                    }
                    else{
                        router.push({name: 'delivery-home', params: { id: id }})
                    }
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

 
    