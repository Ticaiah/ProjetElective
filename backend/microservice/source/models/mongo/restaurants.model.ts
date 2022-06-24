import { Schema } from 'mongoose';
import { mongo } from "../../config/mongo"
import { IAddress } from './address.model';

export interface IRestaurant {
    name:string;
    description:string;
    user_id: number;
    address_id: IAddress;
    phone_number: number;
  
    
}

export const restaurantSchema = new Schema<IRestaurant>({
    name:{type: String, required: true},
    description:{type: String},
    user_id:{type: Number, required: true}, //TODO: qui, parmis les user restaurateur a créé ce restaurant
    address_id:{type : Schema.Types.ObjectId, ref: "Address", required: true},
    phone_number:{type: Number}
});

export const Restaurant = mongo.model<IRestaurant>('Restaurant', restaurantSchema);