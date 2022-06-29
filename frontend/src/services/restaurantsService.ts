import axios, { AxiosRequestConfig } from "axios";
//import userStore from "@/store/userStore";
import { IRestaurant, restaurantsModel } from "@/model/restaurantsModel";
import ApiService from "./apiService";


export default class RestaurantsService extends ApiService {
//TODO : voir les erreurs niveau CORS lors de la saisie du nouveau restaurant
    public createRestaurant(restaurant : restaurantsModel): void {
        console.log(JSON.stringify(restaurant))
        
        this.instance.post('https://appli.docker.localhost/api/restaurants', JSON.stringify(restaurant))
            .then(function (response) {
                //if response is ok, we save the token in the store
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
            
    }

    public modifyRestaurant(restaurant : restaurantsModel): void {

        this.instance.put('https://appli.docker.localhost/api/restaurants/'+restaurant._id, JSON.stringify(restaurant))
            .then(function (response) {
                console.log(response);
            }
            ).catch(function (error) {
                console.log(error);
            }
            );
    }
    public async getRestaurants() :Promise<IRestaurant[]>{
        let restaurants !: IRestaurant []
        try{
            let response = await this.instance.get('https://appli.docker.localhost/api/my-restaurants/')
            restaurants = [<IRestaurant>response.data]
            console.log(restaurants);

        }
        catch(error){
            console.log(error);
        }

        return restaurants
    }
}

 
    