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
      deleteArticleToBasket(state, index:number) {
        console.log("coucou" + index)
        state.articles = state.articles.filter((e: any) => e !== state.articles[index]);
      }
    },
    actions: {
      addArticleToBasket(context, article:articlesModel) {
        context.commit("addArticleToBasket", article)
      },
      deleteArticleToBasket(context, index:number) {
        context.commit("deleteArticleToBasket", index)
    }
  },
    modules: {
    }
  };
  
  export default basketStore;
  
  