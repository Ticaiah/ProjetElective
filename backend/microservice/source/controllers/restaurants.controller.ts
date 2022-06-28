/** source/controllers/commands.ts */
import { Request, Response, NextFunction } from 'express';
import {Restaurant} from '../models/mongo/restaurants.model'

export class RestaurantsController {

/* get all objects with mongoose */
public async getAllRestaurants(req: Request, res: Response) {
    const Restaurants = await Restaurant.find().populate('address_id');
    res.json(Restaurants);
  }

/* get single Restaurant mongo*/
public async getRestaurant(req : Request, res: Response) {
    const rest = await Restaurant.findOne({"_id": req.params._id}).populate('address_id')
      if (rest) {
        res.json(rest)}
      else res.status(404).send({ error: 'Not found' });
      }

/* update a Restaurant*/
public async updateRestaurant(req: Request,  res: Response) {
    let RestaurantFromList = await Restaurant.findOneAndUpdate({"_id": req.params._id}, {$set :req.body}, {"upsert": true});
    if (!RestaurantFromList){
      res.status(404).json("Restaurant with this id doesn't exist");
      return;
    }
    else  {
      (res.status(200).json(RestaurantFromList))
      }
  }      

/* create a new Restaurant with mongoose*/
public async addRestaurant(req: Request, res: Response) {
    const rest = new Restaurant(req.body)
    try
    {
        await rest.save()
        res.status(201).json(rest)
    }
    catch(err)
    {
        res.status(400).json({message: err})
    }
  }

public async deleteRestaurant(req: Request, res: Response) {
    const rest = await Restaurant.findOne({"_id": req.params._id})
    if (rest) {
        rest.delete();
        res.status(201).json({rest});
    }
    else res.status(404).send({ error: 'Not found' })
    }
}