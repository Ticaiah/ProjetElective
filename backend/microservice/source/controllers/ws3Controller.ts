// lib/controllers/nodes.controller.ts
import { Request, Response } from "express";
import { json } from "stream/consumers";
import { Sensor } from "../models/mongo/sensors.model";

export class WS3Controller {
    static sensors = [
        { id: 1, type: 'alpha', datas: [1, 2, 3] },
        { id: 2, type: 'beta', datas: [1, 2, 3], metrics: false },
        { id: 3, type: 'omega', datas: { a: 1, b: 2 } },
    ]

    public test(req: Request, res: Response) {
        // console.log(this)
        // res.json({ "response": "true", bla: this.bla });
        res.json({ "response": "true" });
    }

    /**
     * getAllSensors
     */
    public getAllSensors(req: Request, res: Response) { 
        res.json(WS3Controller.sensors);
    }

    /**
     * getSensorByID
     */
    public async getSensorByID(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);
        const sensor = await Sensor.findOne({id: id});

        // const sensor = WS3Controller.sensors.find(sensor => sensor.id === id);

        return sensor   ? res.json(sensor)
                        : res.json({ found: false });
    }

    /**
     * addSensor
     */
    public async addSensor(req: Request, res: Response) {
        const newSensor = new Sensor(req.body);
        // WS3Controller.sensors.push(req.body);
        await newSensor.save();
        res.json({ok : true})
    }

}