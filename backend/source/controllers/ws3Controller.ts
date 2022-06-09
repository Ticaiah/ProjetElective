// lib/controllers/nodes.controller.ts
import { Request, Response } from "express";
import { json } from "stream/consumers";

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
    public getSensorByID(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);
        const sensor = WS3Controller.sensors.find(sensor => sensor.id === id);

        return sensor   ? res.json(sensor)
                        : res.json({ found: false });
    }

    /**
     * addSensor
     */
    public addSensor(req: Request, res: Response) {
        WS3Controller.sensors.push(req.body)
        res.json({ok : true})
    }

}