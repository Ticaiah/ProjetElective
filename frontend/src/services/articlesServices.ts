import axios, { AxiosRequestConfig } from "axios";
//import userStore from "@/store/userStore";
import { IArticle, articlesModel } from "@/model/articlesModel";


export default class ArticlesService {
//TODO : voir les erreurs niveau CORS lors de la saisie du nouveau Article
    public createArticle(Article : articlesModel): void {
        console.log(JSON.stringify(Article))
        
        axios.post('https://appli.docker.localhost/api/Articles', JSON.stringify(Article))
            .then(function (response) {
                //if response is ok, we save the token in the store
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
            
    }

    public modifyArticle(Article : articlesModel): void {

        axios.put('https://appli.docker.localhost/api/Articles/'+Article._id, JSON.stringify(Article))
            .then(function (response) {
                console.log(response);
            }
            ).catch(function (error) {
                console.log(error);
            }
            );
    }
    public getArticles(user_id : number) : any {
        let Articles !: IArticle []
        axios.get('https://appli.docker.localhost/api/Articles/'+user_id)
        .then(function (response) {
            console.log("ok")
            Articles = [<IArticle>response.data]
            console.log(Articles);
        })
        .catch(function (error) {
            console.log(error);
        })
        return Articles
    }
}