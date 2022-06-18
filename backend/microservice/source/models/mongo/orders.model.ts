import { Schema } from 'mongoose';
import { mongo } from "../../config/mongo"


export interface IOrder {
    menus_list: Number;
    total_price: Number;
    delivery_price: Number;
    delivery_user_id: Number;
    user_id: Number;
    is_validated: boolean;
    payment_type_id: Number;
    transaction_id: Number;
}

export const orderSchema = new Schema<IOrder>({
    menus_list: {type: Number, required: true}, //TODO: liste des meuns/produits
    total_price: {type: Number, required: true}, 
    delivery_price: {type: Number, required: true},
    delivery_user_id: {type: Number, required: true}, //TODO: id de l'utilisateur de type livreur qui a pris en charge la commande
    user_id: {type: Number, required: true}, //TODO: id de l'utilisateur qui a effectué la commande
    is_validated: {type: Boolean, required: true},
    payment_type_id: {type: Number, required: true}, //TODO: A voir
    transaction_id: {type: Number, required: true}, //TODO: A voir
});

export const Order = mongo.model<IOrder>('Order', orderSchema);
