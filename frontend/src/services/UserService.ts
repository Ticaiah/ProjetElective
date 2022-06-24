import axios from "axios";
import userStore from "@/store/userStore";


export default class UserService {
    instance = axios.create({
        baseURL: 'https://appli.docker.localhost/api',
        timeout: 1000,
        // headers: {'X-Custom-Header': 'foobar'}
    });
    
    public createUser(): void {
        axios.post('/auth/register', {
                first_name: userStore.state.user.first_name,
                last_name: userStore.state.user.last_name,
                mail: userStore.state.user.mail,
                password: userStore.state.user.password,
                phone_number: userStore.state.user.phone_number,
                address: userStore.state.user.address,
                type: userStore.state.user.type
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
            
    }

    public loginUser(): void{
        //TODO: faire la fonction
    }
}

 
    