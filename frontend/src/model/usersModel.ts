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
}