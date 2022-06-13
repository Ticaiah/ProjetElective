import { Schema } from 'mongoose';
import { mongo } from "../../config/mongo"


export interface ISensor {
    id: number;
    type: string;
    datas: Array<number> | { a: number, b: number };
    metrics?: boolean;
}

export const sensorSchema = new Schema<ISensor>({
    id: { type: Number, required: true },
    type: { type: String, required: true },
    datas: { type: Schema.Types.Mixed },
    metrics: Boolean
});

export const Sensor = mongo.model<ISensor>('Sensor', sensorSchema);
