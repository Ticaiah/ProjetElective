import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
//import userStore from "@/store/userStore";
import { IRestaurant, restaurantsModel } from "@/model/restaurantsModel";
import ApiService from "./apiService";


export default class RestaurantsService extends ApiService {
//TODO : voir les erreurs niveau CORS lors de la saisie du nouveau restaurant
    public async createRestaurant(restaurant : restaurantsModel, image : File) {
        console.log(JSON.stringify(restaurant))
        
        var imageURL!:AxiosResponse;
        try
        {
            var formData = new FormData();
            formData.append('file', image);
            imageURL = await this.instance.post('https://webserver.cesu.local/api/restaurants/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
        }
        catch (e)
        {
            console.log(e);
        }

        restaurant.img = imageURL ? imageURL.data.url : "https://picsum.photos/200/300"
        
        try
        {
            return await this.instance.post('https://webserver.cesu.local/api/restaurants', JSON.stringify(restaurant));
        }
        catch (e)
        {
            console.log(e);
            return undefined;
        }
            
    }

    public async getRestaurant(id : string){
        try
        {
            var response = await this.instance.get('https://webserver.cesu.local/api/restaurants/', { params: { _id: id } });
            return <restaurantsModel>response.data[0];
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
            return await this.instance.put('https://webserver.cesu.local/api/restaurants/'+restaurant._id, JSON.stringify(restaurant));
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
            let response = await this.instance.get('https://webserver.cesu.local/api/restaurants/')
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
            let response = await this.instance.get('https://webserver.cesu.local/api/my-restaurants/')
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

 
    