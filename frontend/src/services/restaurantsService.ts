import axios, { AxiosRequestConfig } from "axios";
//import userStore from "@/store/userStore";
import { IRestaurant, restaurantsModel } from "@/model/restaurantsModel";
import ApiService from "./apiService";


export default class RestaurantsService extends ApiService {
//TODO : voir les erreurs niveau CORS lors de la saisie du nouveau restaurant
    public async createRestaurant(restaurant : restaurantsModel) {
        console.log(JSON.stringify(restaurant))
        //TODO retirer l'img quand le systeme d'upload est pret
        restaurant.img = "https://picsum.photos/200/300"
        try
        {
            return await this.instance.post('https://appli.docker.localhost/api/restaurants', JSON.stringify(restaurant));
        }
        catch (e)
        {
            console.log(e);
            return undefined;
        }
            
    }

    public async modifyRestaurant(restaurant : restaurantsModel) {
        try
        {
            return await this.instance.put('https://appli.docker.localhost/api/restaurants/'+restaurant._id, JSON.stringify(restaurant));
        }
        catch (e)
        {
            console.log(e);
            return undefined;
        }
    }

    public async getAllRestaurants(){
        let restaurants !: IRestaurant []
        try{
            let response = await this.instance.get('https://appli.docker.localhost/api/restaurants/')
            console.log(response.data);
            restaurants = <restaurantsModel[]>response.data
            console.log("restaurants");
            console.log(restaurants);

            return restaurants;

        }
        catch(error){
            console.log(error);
            return undefined;
        }
    }


    public async getRestauratorRestaurants(){
        // NOTE : Les restaurants renvoyés sont ceux de l'utilisateur connecté (user_id récupéré par le back depuis le token)
        let restaurants !: IRestaurant []
        try{
            let response = await this.instance.get('https://appli.docker.localhost/api/my-restaurants/')
            console.log(response.data);
            restaurants = <restaurantsModel[]>response.data
            console.log("restaurants");
            console.log(restaurants);

            return restaurants;

        }
        catch(error){
            console.log(error);
            return undefined;
        }
    }


}

 
    