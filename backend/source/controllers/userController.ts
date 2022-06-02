/** source/controllers/users.ts */
import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

interface User {
    id: Number;
    username: Number;
    email: String;
    phone: String;
}

// getting all commands
const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    // get some Commands
    let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    let users: [User] = result.data;
    return res.status(200).json({
        message: users
    });
};

export default { getUsers };