/** source/controllers/commands.ts */
import { Request, Response, NextFunction } from 'express';
import { Restaurant } from '../models/mongo/restaurants.model';
import jwt from 'jsonwebtoken';
import { JwtPayload } from 'jsonwebtoken';
import { minioClient } from '../config/minio';
import { v4 as uuidv4 } from 'uuid';

export class RestaurantsController {

  /* get all objects with mongoose */
  public async getAllRestaurants(req: Request, res: Response) {
    try {
      const Restaurants = await Restaurant.find()
      res.json(Restaurants);
    }
    catch (err) {
      res.status(400).json({ message: err })
    }
  }

  /* get single Restaurant mongo*/
  public async getRestaurant(req: Request, res: Response) {
    try {
      const rest = await Restaurant.findOne({ "_id": req.params._id })
      if (rest) {
        res.json(rest)
      }
      else res.status(404).send({ error: 'Not found' });
    }
    catch (err) {
      res.status(400).json({ message: err })
    }
  }

  public async getRestaurantsByUser(req: Request, res: Response) {
    // decode jwt from bearer
    let user_id: number = -1;
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.decode(token, { json: true });
      if (decoded) {
        user_id = decoded.id;
      }
    }

    if (user_id == -1) {
      res.status(401).json({
        message: "No token provided"
      });
      return;
    }

    try {
      const rest = await Restaurant.find({ user_id: user_id })
      if (rest) {
        res.json(rest)
      }
      else res.status(404).send({ error: 'Not found' });
    }
    catch (err) {
      res.status(400).json({ message: err })
    }
  }

  /* update a Restaurant*/
  public async updateRestaurant(req: Request, res: Response) {
    try {
      let RestaurantFromList = await Restaurant.findOneAndUpdate({ "_id": req.params._id }, { $set: req.body }, { "upsert": true });
      if (!RestaurantFromList) {
        res.status(404).json("Restaurant with this id doesn't exist");
        return;
      }
      else {
        (res.status(200).json(RestaurantFromList))
      }
    }
    catch (err) {
      res.status(400).json({ message: err })
    }

  }

  /* create a new Restaurant with mongoose*/
  public async addRestaurant(req: Request, res: Response) {
    // decode jwt from bearer
    let user_id: number = -1;
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.decode(token, { json: true });
      if (decoded) {
        user_id = decoded.id;
      }
    }

    if (user_id == -1) {
      res.status(401).json({
        message: "No token provided"
      });
      return;
    }

    const rest = new Restaurant(req.body)
    rest.user_id = user_id;
    try {
      await rest.save()
      res.status(201).json(rest)
    }
    catch (err) {
      res.status(400).json({ message: err })
    }
  }

  public async deleteRestaurant(req: Request, res: Response) {
    const rest = await Restaurant.findOne({ "_id": req.params._id })
    if (rest) {
      try {
        rest.delete();
        res.status(201).json({ rest });
      }

      catch (err) {
        res.status(400).json({ message: err })
      }
    }
    else res.status(404).send({ error: 'Not found' })
  }

  public async uploadRestaurantImage(req: Request, res: Response) {
    if (req.file) {
      const bucket = 'restaurants-images';

      if (!await minioClient.bucketExists(bucket)) {
        await minioClient.makeBucket(bucket, "");
        const bucketPolicy = {
          "Version": "2012-10-17",
          "Statement": [
              {
                  "Sid": "PublicRead",
                  "Effect": "Allow",
                  "Principal": "*",
                  "Action": [
                      "s3:GetObject",
                      "s3:GetObjectVersion"
                  ],
                  "Resource": [
                      `arn:aws:s3:::${bucket}/*`
                  ]
              }
          ]
        };
        await minioClient.setBucketPolicy(bucket, JSON.stringify(bucketPolicy));
      }
      // get extention from filename
      const ext = req.file.originalname.split('.').pop();
      const fileName = uuidv4() + "." + ext;
      const url = `https://data.webserver.cesu.local/${bucket}/${fileName}`;
      await minioClient.putObject(bucket, fileName, req.file.buffer);
      return res.json({url});
    }
  }
}