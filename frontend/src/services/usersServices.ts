import axios, { AxiosRequestConfig } from "axios";
import { usersModel } from "@/model/usersModel";

export default class UserService {

    //create a user
    public createUser(user: usersModel): void {
        console.log(JSON.stringify(user))
        axios.post('https://appli.docker.localhost/auth/register', JSON.stringify(user), { headers: { 'Content-Type': 'application/json' } })
            .then(function (response) {

                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    //Log user 
    public async loginUser(user: usersModel): Promise<string> {
        //send credential to api
        console.log(JSON.stringify(user))
        try {
            let response = await axios.post('https://appli.docker.localhost/auth/login', JSON.stringify(user), { headers: { 'Content-Type': 'application/json' } });
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


