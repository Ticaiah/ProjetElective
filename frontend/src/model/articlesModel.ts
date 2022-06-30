export interface IArticle {
    name: string;
    type:string;
    price: number;
    stock: Number;
    description:string;
    restaurant_id: string;
    img: string;
    _id : string;
}
export class articlesModel implements IArticle{
    public name!: string;
    public type!:string;
    public price!: number;
    public stock!: Number;
    public description!:string;
    public restaurant_id!: string;
    public img!: string;
    public _id! : string;
}