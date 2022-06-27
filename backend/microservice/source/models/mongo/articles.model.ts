import { Schema } from 'mongoose';
import { mongo } from "../../config/mongo"
import { IRestaurant } from './restaurants.model';


export interface IArticle {
    name:string;
    type:string;
    description:string;
    price:number;
    restaurant_id:IRestaurant;
    stock:number;
    img:string
    
}

export const articleSchema = new Schema<IArticle>({
    name:{type: String, required: true},
    type:{type: String, required: true, enum:["Boisson","Snacks","Dessert","Sauce","Plat"]},
    description:{type: String},
    price: {type: Number, required: true},
    restaurant_id:{type : Schema.Types.ObjectId, ref:'Restaurant', required: true},
    stock:{type: Number, required: true},
    img:{type: String, required: true},
});

export const Article = mongo.model<IArticle>('Article', articleSchema);
