
import { Request, Response, NextFunction } from 'express';
import {Order} from '../models/mongo/orders.model'

export class OrdersController {

/* get all objects with mongoose */
public async getAllOrders(req: Request, res: Response) {
    const Orders = await Order.find();
    res.json(Orders);
  }

/* get single Order mongo*/
public async getOrder(req : Request, res: Response) {
    const ord = await Order.findOne({"_id": req.params._id})
      if (ord) {
        res.json(ord)}
      else res.status(404).send({ error: 'Something failed!' });
      }

/* update a Order*/
public async updateOrder(req: Request,  res: Response) {
    let OrderFromList = await Order.findOneAndUpdate({"_id": req.params._id}, {$set :req.body}, {"upsert": true});
    if (!OrderFromList){
      res.status(404).json("Order with this id doesn't exist");
      return;
    }
    else  {
      (res.status(200).json(OrderFromList))
      }
  }      

/* create a new Order with mongoose*/
public async addOrder(req: Request, res: Response) {
    const ord = new Order (req.body)
    ord.save();
    res.status(201).json({ord});
  }

public async deleteOrder(req: Request, res: Response) {
  const ord = await Order.findOne({"_id": req.params._id})
  if (ord) {
      ord.delete();
      res.status(201).json({ord});
  }
  else res.status(404).send({ error: 'Not found' })
  }
}