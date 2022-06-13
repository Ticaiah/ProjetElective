// lib/controllers/nodes.controller.ts
import {Request, Response, NextFunction} from "express";
import {User, UserInterface} from "../models/user.model";
import axios, {AxiosResponse} from "axios";

export class UsersController {
  public index(req: Request, res: Response) {
    User.findAll<User>({})
      .then((users: Array<User>) => res.json(users))  
      .catch((err: Error) => res.status(500).json(err));
  }

  // getting all commands
  public async getUsers (req: Request, res: Response, next: NextFunction){
  // get some Commands
  let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/users`);
  let users: [User] = result.data;
  return res.status(200).json({
      message: users
  });
  }
  public create(req: Request, res: Response) {
    const params: any = req.body;

    User.create<User>(params)
      .then((user: User) => res.status(201).json(user))
      .catch((err: Error) => res.status(500).json(err));
  }
  
}