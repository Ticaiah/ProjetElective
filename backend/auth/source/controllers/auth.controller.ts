// lib/controllers/nodes.controller.ts
import {Request, Response} from "express";
import {Sensor} from "../models/mongo/sensors.model"

export class AuthController {
  public checkJWT(req: Request, res: Response) {
    if (req.headers.authorization == "Bearer icicmontoken")
    {
        res.set('X-Connected', 'true');
        res.send("OK");

    }
    else 
    {
        res.set('X-Connected', 'false');
        res.sendStatus(401);
    }
  }
}