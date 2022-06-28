/** source/controllers/commands.ts */
import { Request, Response, NextFunction } from 'express';
import {Address} from '../models/mongo/address.model'

export class AddressesController {

/* get all objects with mongoose */
public async getAllAddresses(req: Request, res: Response) {
  try {
    const Addresss = await Address.find();
    res.json(Addresss);
  }
    catch(err)
    {
        res.status(400).json({message: err})
    }
  }

/* get single Address mongo*/
public async getAddress(req : Request, res: Response) {
  try {
    const add = await Address.findOne({"_id": req.params._id})
      if (add) {
        res.json(add)}
      else res.status(404).send({ error: 'Something failed!' });
  }

    catch(err)
    {
        res.status(400).json({message: err})
    }
  }

/* update a Address*/
public async updateAddress(req: Request,  res: Response) {
    try {
      let AddressFromList = await Address.findOneAndUpdate({"_id": req.params._id}, {$set :req.body}, {"upsert": true});
      if (!AddressFromList){
        res.status(404).json("Address with this id doesn't exist");
        return;
      }
      else  {
        (res.status(200).json(AddressFromList))
        }
    }
    catch(err)
    {
        res.status(400).json({message: err})
    }
  }      

/* create a new Address with mongoose*/
public async addAddress(req: Request, res: Response) {
    try {
      const add = new Address (req.body)
      add.save();
      res.status(201).json({add});
    }
    catch(err)
    {
        res.status(400).json({message: err})
    }
  }
  
public async deleteAddress(req: Request, res: Response) {
    try {
      const add = await Address.findOne({"_id": req.params._id})
      if (add) {
          add.delete();
          res.status(201).json({add});
      }
      else res.status(404).send({ error: 'Not found' })
    }
    catch(err)
    {
        res.status(400).json({message: err})
    }
  }
}