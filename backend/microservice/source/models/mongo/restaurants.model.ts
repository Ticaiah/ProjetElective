import { Schema } from 'mongoose';
import { mongo } from "../../config/mongo"


export interface IRestauarant {
    name:string;
    description:string;
    user_id: number;
    address_id: number;
    phone_number: number;
  
    
}

export const restaurantSchema = new Schema<IRestauarant>({
    name:{type: String, required: true},
    description:{type: String},
    user_id:{type: Number, required: true}, //TODO: qui, parmis les user restaurateur a créé ce restaurant
    address_id:{type: Number, required: true}, //TODO: adresse venant de la mega table d'adresse de france??
    phone_number:{type: Number}
  
    
});

export const Restaurant = mongo.model<IRestauarant>('Restaurant', restaurantSchema);
