import { Schema, model, connect } from 'mongoose';

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


export const Sensor = model<ISensor>('Sensor', sensorSchema);
