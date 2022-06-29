/** source/controllers/commands.ts */
import { Request, Response, NextFunction } from 'express';
import {Article} from '../models/mongo/articles.model'

export class ArticlesController {

// get all articles from a restaurant
public async getAllArticles(req: Request, res: Response) {
  try {
    const Articles = await Article.find({restaurant_id: req.query.restaurant_id})
    res.json(Articles);
  }
    catch(err)
    {
        res.status(400).json({message: err})
    }
  }

/* get single Article mongo*/
public async getArticle(req : Request, res: Response) {
  try {
    const ord = await Article.findOne({"_id": req.params._id}).populate("restaurant_id")
      if (ord) {
        res.json(ord)}
      else res.status(404).send({ error: 'Something failed!' });
  }

    catch(err)
    {
        res.status(400).json({message: err})
    }
  }

/* update a Article*/
public async updateArticle(req: Request,  res: Response) {
  try {
    let ArticleFromList = await Article.findOneAndUpdate({"_id": req.params._id}, {$set :req.body}, {"upsert": true});
    if (!ArticleFromList){
      res.status(404).json("Article with this id doesn't exist");
      return;
    }
    else  {
      (res.status(200).json(ArticleFromList))
      }
  }
    catch(err)
    {
        res.status(400).json({message: err})
    }
  }      

/* create a new Article with mongoose*/
public async addArticle(req: Request, res: Response) {
    try {
      const art = new Article(req.body);
      await art.save();
      res.status(201).json({art});
    }
    catch(err)
    {
        res.status(400).json({message: err})
    }
  }

public async deleteArticle(req: Request, res: Response) {
  try {
    const art = await Article.findById(req.params._id)
    if (art) {
        art.delete();
        res.status(201).json({art});
    }
    else res.status(404).send(req.params)
  }
  catch(err)
  {
      res.status(400).json({message: err})
  }
  }
}