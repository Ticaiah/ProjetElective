import { Schema } from 'mongoose';
import { mongo } from "../../config/mongo"
import { IRestaurant } from './restaurants.model'
import {IArticle} from './articles.model'

export interface IMenu {
    name:string;
    article_list:IArticle[];
    description:string;
    price:number;
    restaurant_id:IRestaurant;    
}

export const menuSchema = new Schema<IMenu>({
    name:{type: String, required: true},
    article_list:[{type : Schema.Types.ObjectId, ref:'Article', required: true}],
    description:{type: String},
    price: {type: Number, required: true},
    restaurant_id:{type : Schema.Types.ObjectId, ref:'Restaurant', required: true},
});

export const Menu = mongo.model<IMenu>('Menu', menuSchema);
