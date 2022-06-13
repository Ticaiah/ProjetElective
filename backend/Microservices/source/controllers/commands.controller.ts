// lib/controllers/commands.controller.ts
import {Request, Response, NextFunction} from "express";
import {Command, CommandInterface} from "../models/command.model";
import axios, { AxiosResponse } from 'axios';

export class CommandsController {
  public index(req: Request, res: Response) {
    Command.findAll<Command>({})
      .then((commands: Array<Command>) => res.json(commands))
      .catch((err: Error) => res.status(500).json(err));
  }

  // getting all commands
  public async getCommands (req: Request, res: Response, next: NextFunction) {
  // get some Commands
  let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
  let commands: [Command] = result.data;
  return res.status(200).json({
      message: commands
  });
};

  public async getCommand(req: Request, res: Response, next: NextFunction){
    // get the command id from the req
    let id: string = req.params.id;
    // get the command
    let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    let command: Command = result.data;
    return res.status(200).json({
        message: command
    });
};

// updating a command
public async updateCommand (req: Request, res: Response, next: NextFunction) {
  // get the command id from the req.params
  let id: string = req.params.id;
  // get the data from req.body
  let title: string = req.body.title ?? null;
  let body: string = req.body.body ?? null;
  // update the command
  let response: AxiosResponse = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      ...(title && { title }),
      ...(body && { body })
  });
  // return response
  return res.status(200).json({
      message: response.data
  });
};

// deleting a command
public async deleteCommand (req: Request, res: Response, next: NextFunction){
  // get the command id from req.params
  let id: string = req.params.id;
  // delete the command
  let response: AxiosResponse = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  // return response
  return res.status(200).json({
      message: 'command deleted successfully'
  });
};

// adding a command
public async addCommand (req: Request, res: Response, next: NextFunction) {
  // get the data from req.body
  let title: string = req.body.title;
  let body: string = req.body.body;
  // add the command
  let response: AxiosResponse = await axios.post(`https://jsonplaceholder.typicode.com/posts`, {
      title,
      body
  });
  // return response
  return res.status(200).json({
      message: response.data
  });
};
  public create(req: Request, res: Response) {
    const params: any = req.body;

    Command.create<Command>(params)
      .then((command: Command) => res.status(201).json(command))
      .catch((err: Error) => res.status(500).json(err));
  }
}