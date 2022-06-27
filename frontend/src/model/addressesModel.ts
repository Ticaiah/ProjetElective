export interface IAddress {
    _id:string
    address: String;
    cp: Number;
    city: String;
 }

export class addressesModel implements IAddress {
    public _id!:string
    public address:string;
    public city:string;
    public cp: number;

    public constructor (address:string = "Address", city:string ="City", cp:number=0) {
        this.address= address
        this.city=city
        this.cp=cp
    }
}