import { Schema } from 'mongoose';
import { mongo } from "../../config/mongo"


export interface IArticle {
    name:string;
    type:string;
    description:string;
    price:number;
    restaurant_id:number;
    stock:number;
    
}

export const articleSchema = new Schema<IArticle>({
    name:{type: String, required: true},
    type:{type: String, required: true, enum:["Boisson","Snacks","Dessert","Sauce","Plat"]},
    description:{type: String},
    price: {type: Number, required: true},
    restaurant_id:{type: Number, required: true}, //TODO: lien avec un restaurant pour savoir d'ou vient l'article en question
    stock:{type: Number, required: true}
});

export const Article = mongo.model<IArticle>('Article', articleSchema);
