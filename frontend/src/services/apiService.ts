import CookieUtils from "@/utils/cookieUtils";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

// Classe mère pour les services consomateurs de l'API
export default class ApiService {
    instance: AxiosInstance;

    constructor() {
        this.instance = axios.create({
            baseURL: 'https://appli.docker.localhost/api',
            timeout: 1000,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            validateStatus: () => {
                return true;
            }
            // headers: {'X-Custom-Header': 'foobar'}
        });
        // Add a request interceptor
        this.instance.interceptors.request.use(function (config:AxiosRequestConfig) {
            var token = CookieUtils.getCookie("token");
            if (config.headers)
            {
                config.headers.Authorization = `Bearer ${token}`;   
            }

            return config;
        });
    }

}