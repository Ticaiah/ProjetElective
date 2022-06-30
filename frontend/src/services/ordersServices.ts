import axios, { AxiosRequestConfig } from "axios";
import { IOrder, ordersModel } from "@/model/ordersModel";
import ApiService from "./apiService";


export default class OrdersService extends ApiService {
    public async createOrder(Order : ordersModel) {
        console.log(JSON.stringify(Order))
        
        try 
        {
            await this.instance.post('https://appli.docker.localhost/api/Orders', JSON.stringify(Order))
        }
        catch (e) 
        {
            console.log(e)
            return undefined
        }
            
    }

    public async modifyOrder(Order : ordersModel) {
        try {
            await this.instance.put('https://appli.docker.localhost/api/Orders/'+Order._id, JSON.stringify(Order))
        }
        catch (e) {
            console.log(e)
        }
    }

    public async getUserOrders(){
        let Orders !: IOrder []
        try {
            let response = await this.instance.get('https://appli.docker.localhost/api/Orders/')
            console.log(response.data);
            Orders = <IOrder[]>response.data
            console.log("restaurants");
            console.log(Orders);

            return Orders;
        }
        catch(e){
            console.log(e);
            return undefined;
        }
    }
}