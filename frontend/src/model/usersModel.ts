export interface IUser {
    id:number
    first_name:string;
    last_name:string;
    mail:string;
    password:string
    is_verified:boolean
    phone_number: string;
    address: string;
    postcode : number;
    city:string;
    type:string
}

export class usersModel implements IUser{
	public id!: number;
	public first_name!: string;
	public last_name!: string;
	public mail!: string;
	public password!: string;
	public is_verified!: boolean;
	public phone_number!: string;
	public address!: string;
	public postcode!: number;
	public city!: string;
	public type!: string;

    public constructor (first_name:string="Prénom", last_name:string="Nom", mail:string="mail@mail.mail", password:string="", phone_number:string="+33000000000", address : string="Addresse", postcode:number=0, city:string="Ville", type:string) {
        this.first_name= first_name
        this.last_name=last_name
        this.mail=mail
        this.password=password
        this.phone_number=phone_number
        this.address=address
        this.postcode=postcode
        this.city=city
        this.type=type
    }
}