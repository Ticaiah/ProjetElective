import { articlesModel } from "@/model/articlesModel";
import { Module } from "vuex";

const basketStore: Module<any, any> = {
    state: {
        articles: new Array<articlesModel>(),
    },
    getters: {
    },
    mutations: {
      addArticleToBasket(state, article:articlesModel){
          state.articles.push(article);
          console.log("coucou c'est ajouté")
          console.log(state.articles)
      },
      deleteArticleToBasked(state, index:number) {
        delete state.article[index]
      }
    },
    actions: {
      addArticleToBasket(context, article:articlesModel) {
        context.commit("addArticleToBasket", article)
      },
    },
    modules: {
    }
  };
  
  export default basketStore;
  
  