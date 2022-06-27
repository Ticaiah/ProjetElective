import {articlesModel} from './articlesModel'
import {restaurantsModel } from './restaurantsModel'

export interface IMenu {
    name:string;
    article_list:articlesModel[];
    description:string;
    price:number;
    restaurant_id:restaurantsModel;    
}

export class menusModel {
    public name:string;
    public article_list:articlesModel[];
    public description:string;
    public price:number;
    public restaurant_id:restaurantsModel;    

    public constructor (name:string="Menu", article_list:articlesModel[], description:string="Description", price:number=0, restaurant_id:restaurantsModel) {
        this.name= name
        this.article_list= article_list
        this.description=description
        this.price=price
        this.restaurant_id=restaurant_id
    }
}