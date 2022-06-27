import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import userStore from "@/store/userStore";


// Classe mère pour les services consomateurs de l'API
export default class ApiService {
    instance: AxiosInstance;

    constructor() {
        this.instance = axios.create({
            baseURL: 'https://appli.docker.localhost/api',
            timeout: 1000,
            // headers: {'X-Custom-Header': 'foobar'}
        });
        // Add a request interceptor
        this.instance.interceptors.request.use(function (config:AxiosRequestConfig) {
            const token = userStore.state.auth;
            if (config.headers)
            {
                config.headers.Authorization = `Bearer ${token}`;   
            }

            return config;
        });
    }

}