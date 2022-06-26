import { Schema } from 'mongoose';
import { mongo } from "../../config/mongo"
import { IAddress } from './address.model';

export interface IRestaurant {
    address:string;
    cp:Number;
    city:string;
    name:string;
    description:string;
    user_id: number;
    address_id: IAddress;
    phone_number: string;
}

export const restaurantSchema = new Schema<IRestaurant>({
    name:{type: String, required: true},
    description:{type: String},
    user_id:{type: Number, required: true}, //TODO: qui, parmis les user restaurateur a créé ce restaurant
    address:{type : String, required: true},
    cp:{type : Number, required: true},
    city:{type : String, required: true},
    phone_number:{type: String}
});

export const Restaurant = mongo.model<IRestaurant>('Restaurant', restaurantSchema);
