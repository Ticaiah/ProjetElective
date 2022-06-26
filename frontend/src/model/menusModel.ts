import {IArticle} from './articlesModel'
import { IRestaurant } from './restaurantsModel'

export interface IMenu {
    name:string;
    article_list:IArticle[];
    description:string;
    price:number;
    restaurant_id:IRestaurant;    
}

export class menusModel {
    public name:string;
    public article_list:IArticle[];
    public description:string;
    public price:number;
    public restaurant_id:IRestaurant;    

    public constructor (name:string, article_list:IArticle[], description:string, price:number, restaurant_id:IRestaurant) {
        this.name= name
        this.article_list= article_list
        this.description=description
        this.price=price
        this.restaurant_id=restaurant_id
    }
}