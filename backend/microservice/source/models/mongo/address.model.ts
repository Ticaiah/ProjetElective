import { Schema } from 'mongoose';
import { mongo } from "../../config/mongo"


export interface IAddress {
   address: String;
   cp: Number;
   city: String;
}

export const addressSchema = new Schema<IAddress>({
    address:{type: String, required: true},
    cp:{type: Number, required: true},
    city:{type: String, required: true}
});

export const Address = mongo.model<IAddress>('Address', addressSchema);