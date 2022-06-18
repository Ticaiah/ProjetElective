/** source/controllers/commands.ts */
import { Request, Response, NextFunction } from 'express';
import {Article} from '../models/mongo/articles.model'

export class ArticlesController {

/* get all objects with mongoose */
public async getAllArticles(req: Request, res: Response) {
    const Articles = await Article.find();
    res.json(Articles);
  }

/* get single Article mongo*/
public async getArticle(req : Request, res: Response) {
    const ord = await Article.findOne({"_id": req.params._id})
      if (ord) {
        res.json(ord)}
      else res.status(404).send({ error: 'Something failed!' });
      }

/* update a Article*/
public async updateArticle(req: Request,  res: Response) {
    let ArticleFromList = await Article.findOneAndUpdate({"_id": req.params._id}, {$set :req.body}, {"upsert": true});
    if (!ArticleFromList){
      res.status(404).json("Article with this id doesn't exist");
      return;
    }
    else  {
      (res.status(200).json(ArticleFromList))
      }
  }      

/* create a new Article with mongoose*/
public async addArticle(req: Request, res: Response) {
    const art = new Article (req.body)
    art.save();
    res.status(201).json({art});
  }

public async deleteArticle(req: Request, res: Response) {
  const art = await Article.findById(req.params._id)
  if (art) {
      art.delete();
      res.status(201).json({art});
  }
  else res.status(404).send(req.params)
  }
}