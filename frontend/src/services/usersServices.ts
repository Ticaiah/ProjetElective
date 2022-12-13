import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { usersModel } from "@/model/usersModel";

export default class UserService {

    //create a user
    public async createUser(user: usersModel) {
        console.log(JSON.stringify(user))
        try {
            const response = await axios.post('https://webserver.cesu.local/auth/register', JSON.stringify(user), { headers: { 'Content-Type': 'application/json' } });
            return response;
        }
        catch (e) {
            console.log(e);
            return e as AxiosError;
            // return "Erreur d'enregistrement";
        }
    }

    //Log user 
    public async loginUser(user: usersModel): Promise<string> {
        //send credential to api
        console.log(JSON.stringify(user))
        try {
            let response = await axios.post('https://webserver.cesu.local/auth/login', JSON.stringify(user), { headers: { 'Content-Type': 'application/json' } });
            let token: string = response.data.token;
            if (token) {
                return token;
            }
            else {
                console.log("pas de token reçu");
                return "test";
            }
        }
        catch (e) {
            console.log(e);
            return "test";
        }
    }

}


