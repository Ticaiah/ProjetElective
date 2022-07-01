import { articlesModel } from './articlesModel';

export interface IOrder {
    _id : string;
    articles_list: articlesModel[];
    total_price: Number;
    delivery_price: Number;
    delivery_user_id: Number;
    user_id: Number;
    is_validated: boolean;
    payment_type_id: Number;
    transaction_id: Number;
    city: string;
    address:string;
    cp:Number;
}
export class ordersModel implements IOrder {
    
    public _id !: string;
    public articles_list!: articlesModel[];
    public total_price!: Number;
    public delivery_price!: Number;
    public delivery_user_id!: Number;
    public user_id!: Number;
    public is_validated!: boolean;
    public payment_type_id!: Number;
    public transaction_id!: Number;
    public cp !: Number
    public address !: string
    public city !: string

}