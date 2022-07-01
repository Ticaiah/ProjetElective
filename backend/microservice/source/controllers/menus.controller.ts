/** source/controllers/commands.ts */
import { Request, Response, NextFunction } from 'express';
import {Menu} from '../models/mongo/menus.model'

export class MenusController {

/* get all objects with mongoose */
public async getAllMenus(req: Request, res: Response) {
  try {
    const Menus = await Menu.find().populate("restaurant_id").populate("article_list");
    res.json(Menus);
  }
    catch(err)
    {
        res.status(400).json({message: err})
    }
  }

/* get single Menu mongo*/
public async getMenu(req : Request, res: Response) {
  try {
    const men = await Menu.findOne({"_id": req.params._id}).populate("restaurant_id","article_list")
      if (men) {
        res.json(men)}
      else res.status(404).send({ error: 'Something failed!' });
  }
    catch(err)
    {
        res.status(400).json({message: err})
    }
  }

/* update a Menu*/
public async updateMenu(req: Request,  res: Response) {
  try {
    let MenuFromList = await Menu.findOneAndUpdate({"_id": req.params._id}, {$set :req.body}, {"upsert": true});
    if (!MenuFromList){
      res.status(404).json("Menu with this id doesn't exist");
      return;
    }
    else  {
      (res.status(200).json(MenuFromList))
      }
    }
    catch(err)
    {
        res.status(400).json({message: err})
    }
  }      

/* create a new Menu with mongoose*/
public async addMenu(req: Request, res: Response) {
  try {
    const men = new Menu (req.body)
    men.save();
    res.status(201).json({men});
  }
    catch(err)
    {
        res.status(400).json({message: err})
    }
  }

public async deleteMenu(req: Request, res: Response) {
  try {
    const men = await Menu.findOne({"_id": req.params._id}).populate("restaurant_id","article_list")
    if (men) {
        men.delete();
        res.status(201).json({men});
    }
    else res.status(404).send({ error: 'Not found' })
  }
    catch(err)
    {
        res.status(400).json({message: err})
    }
  }
}