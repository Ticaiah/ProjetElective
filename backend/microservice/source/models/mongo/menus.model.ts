import { Schema } from 'mongoose';
import { mongo } from "../../config/mongo"


export interface IMenu {
    name:string;
    article_list:String;
    description:string;
    price:number;
    restaurant_id:number;    
}

export const menuSchema = new Schema<IMenu>({
    name:{type: String, required: true},
    article_list:{type: String, required: true}, //TODO: une liste d'objet de type article? changer le type mis de bas qui est string
    description:{type: String},
    price: {type: Number, required: true}, //TODO: type number prend bien les float??
    restaurant_id:{type: Number, required: true}, //TODO: lien avec un restaurant pour savoir d'ou vient le menu en question

    
});

export const Menu = mongo.model<IMenu>('Article', menuSchema);
