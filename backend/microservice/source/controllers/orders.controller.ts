
import { Request, Response, NextFunction } from 'express';
import {Order} from '../models/mongo/orders.model'

export class OrdersController {

/* get all orders from a user */
public async getAllOrders(req: Request, res: Response) {
  try{
    const Orders = await Order.find({user_id: req.query.user_id}).populate('articles_list');
    res.json(Orders);
  }
  catch(err)
  {
      res.status(400).json({message: err})
  }
  }

/* get single Order mongo*/
public async getOrder(req : Request, res: Response) {
  try {
    const ord = await Order.findOne({"_id": req.params._id})
      if (ord) {
        res.json(ord)}
      else res.status(404).send({ error: 'Something failed!' });
      }

      catch(err)
      {
          res.status(400).json({message: err})
      }
    }

/* update a Order*/
public async updateOrder(req: Request,  res: Response) {
  try {
    let OrderFromList = await Order.findOneAndUpdate({"_id": req.params._id}, {$set :req.body}, {"upsert": true});
    if (!OrderFromList){
      res.status(404).json("Order with this id doesn't exist");
      return;
    }
    else  {
      (res.status(200).json(OrderFromList))
      }
  }
    catch(err)
    {
        res.status(400).json({message: err})
    }
  }      

/* create a new Order with mongoose*/
public async addOrder(req: Request, res: Response) {
  try {
    const ord = new Order (req.body)
    ord.save();
    res.status(201).json({ord});
  }
  catch(err)
    {
        res.status(400).json({message: err})
    }
  }

public async deleteOrder(req: Request, res: Response) {
  try {
    const ord = await Order.findOne({"_id": req.params._id})
    if (ord) {
        ord.delete();
        res.status(201).json({ord});
    }
    else res.status(404).send({ error: 'Not found' })
    }

  catch(err)
  {
      res.status(400).json({message: err})
  }
}
}