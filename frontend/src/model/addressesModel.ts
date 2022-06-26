export interface IAddress {
    address: String;
    cp: Number;
    city: String;
 }

export class addressesModel {
    public address:string;
    public city:string;
    public cp: number;


    public constructor (address:string, city:string, cp:number) {
        this.address= address
        this.city=city
        this.cp=cp
    }
}