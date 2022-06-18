/** source/controllers/commands.ts */
import { Request, Response, NextFunction } from 'express';
import {Address} from '../models/mongo/address.model'

export class AddressesController {

/* get all objects with mongoose */
public async getAllAddresses(req: Request, res: Response) {
    const Addresss = await Address.find();
    res.json(Addresss);
  }

/* get single Address mongo*/
public async getAddress(req : Request, res: Response) {
    const add = await Address.findOne({"_id": req.params._id})
      if (add) {
        res.json(add)}
      else res.status(404).send({ error: 'Something failed!' });
      }

/* update a Address*/
public async updateAddress(req: Request,  res: Response) {
    let AddressFromList = await Address.findOneAndUpdate({"_id": req.params._id}, {$set :req.body}, {"upsert": true});
    if (!AddressFromList){
      res.status(404).json("Address with this id doesn't exist");
      return;
    }
    else  {
      (res.status(200).json(AddressFromList))
      }
  }      

/* create a new Address with mongoose*/
public async addAddress(req: Request, res: Response) {
    const add = new Address (req.body)
    add.save();
    res.status(201).json({add});
    }
  
public async deleteAddress(req: Request, res: Response) {
  const add = await Address.findOne({"_id": req.params._id})
  if (add) {
      add.delete();
      res.status(201).json({add});
  }
  else res.status(404).send({ error: 'Not found' })
  }
}