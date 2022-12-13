import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
//import userStore from "@/store/userStore";
import { IArticle, articlesModel } from "@/model/articlesModel";
import ApiService from "./apiService";


export default class ArticlesService extends ApiService {
    public async createArticle(article : articlesModel, image : File) {
        console.log(JSON.stringify(article))
        //send image
        var imageURL!:AxiosResponse;
        try
        {
            var formData = new FormData();
            formData.append('file', image);
            imageURL = await this.instance.post('https://10.0.0.23/api/articles/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
        }
        catch (e)
        {
            console.log(e);
        }
 
        article.img = imageURL ? imageURL.data.url : "https://picsum.photos/200/300"
         
        try
        {
            return await this.instance.post('/articles', JSON.stringify(article));
        }
        catch (e)
        {
            console.log(e);
            return undefined;
        }
    }

    public modifyArticle(Article : articlesModel): void {

        axios.put('https://10.0.0.23/api/Articles/'+Article._id, JSON.stringify(Article))
            .then(function (response) {
                console.log(response);
            }
            ).catch(function (error) {
                console.log(error);
            }
            );
    }
    
    public async getArticles(restaurant_id : string) {
        try{
            let response = await this.instance.get('articles/', {params: {restaurant_id: restaurant_id}})
            console.log(response.data);
            return <articlesModel[]>response.data

        }
        catch(error){
            console.log(error);
            return undefined;
        }
    }
}