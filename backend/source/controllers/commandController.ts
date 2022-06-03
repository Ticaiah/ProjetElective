/** source/controllers/commands.ts */
import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

//TODO Passer en OOP : Regarder nodes.controller.ts

interface Command {
    userId: Number;
    id: Number;
    title: String;
    body: String;
}

// getting all commands
const getCommands = async (req: Request, res: Response, next: NextFunction) => {
    // get some Commands
    let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    let commands: [Command] = result.data;
    return res.status(200).json({
        message: commands
    });
};

// getting a single command
const getCommand = async (req: Request, res: Response, next: NextFunction) => {
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
const updateCommand = async (req: Request, res: Response, next: NextFunction) => {
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
const deleteCommand = async (req: Request, res: Response, next: NextFunction) => {
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
const addCommand = async (req: Request, res: Response, next: NextFunction) => {
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

export default { getCommands, getCommand, updateCommand, deleteCommand, addCommand };