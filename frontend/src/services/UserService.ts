import axios, { AxiosRequestConfig } from "axios";
import userStore from "@/store/userStore";


export default class UserService {
    instance = axios.create({
        baseURL: 'https://appli.docker.localhost/api',
        timeout: 1000,
        // headers: {'X-Custom-Header': 'foobar'}
    });
    // Add a request interceptor
    // .interceptors.request.use(function (config:AxiosRequestConfig) {
    //     const token = userStore.state.token;*
    //     config.headers.Authorization = `Bearer ${token}`;

    //     return config;
    // });
    
    public createUser(): void {
        axios.post('https://appli.docker.localhost/auth/register', {
                first_name: userStore.state.user.first_name,
                last_name: userStore.state.user.last_name,
                mail: userStore.state.user.mail,
                password: userStore.state.user.password,
                phone_number: userStore.state.user.phone_number,
                address: userStore.state.user.address,
                // TODO récupérer depuis le store
                postcode: 4300,
                city: "TEst",
                type: userStore.state.user.type
            })
            .then(function (response) {
                //if response is ok, we save the token in the store
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

 
    