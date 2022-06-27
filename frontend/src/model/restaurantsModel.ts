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

    public constructor (name:string="Restaurant", description:string="Description", user_id:number=0, address:string="Addresse", cp:number=0, city:string="Ville", phone_number:string="+33000000000") {
        this.name= name
        this.description=description
        this.user_id=user_id
        this.address=address
        this.cp=cp;
        this.city=city
        this.phone_number=phone_number
    }
}