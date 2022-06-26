import { IArticle } from './articlesModel';

export interface IOrder {
    articles_list: IArticle[];
    total_price: Number;
    delivery_price: Number;
    delivery_user_id: Number;
    user_id: Number;
    is_validated: boolean;
    payment_type_id: Number;
    transaction_id: Number;
}
export class ordersModel {
    
    public articles_list: IArticle[];
    public total_price: Number;
    public delivery_price: Number;
    public delivery_user_id: Number;
    public user_id: Number;
    public is_validated: boolean;
    public payment_type_id: Number;
    public transaction_id: Number;

    public constructor (articles_list: IArticle[], total_price:number, delivery_price:number, delivery_user_id:number, user_id:Number, payment_type_id:Number, transaction_id:number, is_validated:boolean) {
        this.articles_list= articles_list
        this.delivery_price=delivery_price
        this.total_price=total_price
        this.delivery_user_id=delivery_user_id
        this.user_id=user_id
        this.is_validated = is_validated
        this.payment_type_id = payment_type_id
        this.transaction_id = transaction_id
    }
}