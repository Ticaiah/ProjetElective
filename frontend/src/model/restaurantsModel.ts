import { IAddress } from './addressesModel';

export interface IRestaurant {
    name:string;
    description:string;
    user_id: number;
    address_id: IAddress;
    phone_number: number;
}

export class restaurantsModel {
    public name:string;
    public description:string;
    public user_id: number;
    public address_id: IAddress;
    public phone_number: string;

    public constructor (name:string, description:string, user_id:number, address_id:IAddress, phone_number:string) {
        this.name= name
        this.description=description
        this.user_id=user_id
        this.address_id=address_id
        this.phone_number=phone_number
    }
}