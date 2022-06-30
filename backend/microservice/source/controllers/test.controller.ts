import { Request, Response, NextFunction } from 'express';
import { minioClient } from '../config/minio';

export class TestController {
    public async test(req: Request, res: Response): Promise<Response> {
        const bucket = 'test';
        const object = 'test.txt';
        const data = 'test';
        if (!await minioClient.bucketExists(bucket))
        {
            await minioClient.makeBucket(bucket, "");
        }

        const result = await minioClient.putObject(bucket, object, data);
        return res.json(result);
    }
}
