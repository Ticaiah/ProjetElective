import { addressesModel } from './addressesModel';

export interface IRestaurant {
    _id : string;
    name:string;
    description:string;
    user_id: number;
    address: string;
    cp : number;
    city : string;
    phone_number: string;
}

export class restaurantsModel implements IRestaurant {
    public _id!:string
    public name!:string;
    public description!:string;
    public user_id!: number;
    public address!: string;
    public cp !: number;
    public city !: string
    public phone_number!: string;
}