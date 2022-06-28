import axios, { AxiosRequestConfig } from "axios";
//import userStore from "@/store/userStore";
import { IOrder, ordersModel } from "@/model/ordersModel";


export default class OrdersService {
//TODO : voir les erreurs niveau CORS lors de la saisie du nouveau Order
    public createOrder(Order : ordersModel): void {
        console.log(JSON.stringify(Order))
        
        axios.post('https://appli.docker.localhost/api/Orders', JSON.stringify(Order))
            .then(function (response) {
                //if response is ok, we save the token in the store
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
            
    }

    public modifyOrder(Order : ordersModel): void {

        axios.put('https://appli.docker.localhost/api/Orders/'+Order._id, JSON.stringify(Order))
            .then(function (response) {
                console.log(response);
            }
            ).catch(function (error) {
                console.log(error);
            }
            );
    }
    public getOrders(user_id : number) : any {
        let Orders !: IOrder []
        axios.get('https://appli.docker.localhost/api/Orders/'+user_id)
        .then(function (response) {
            console.log("ok")
            Orders = [<IOrder>response.data]
            console.log(Orders);
        })
        .catch(function (error) {
            console.log(error);
        })
        return Orders
    }
}