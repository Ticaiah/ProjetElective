// lib/app.ts
import morgan from 'morgan';
import helmet from 'helmet';
import express, { Express } from 'express';
import { Routes } from "./config/routes";
import mongoose from "mongoose";

class App {
  public app: Express;
  public routePrv: Routes;

  constructor() {
    this.app = express();
    this.config();
    this.routePrv = new Routes();
    this.routePrv.routes(this.app);
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(morgan('dev'));
    this.app.use(helmet({
      crossOriginResourcePolicy: false,
    }));

    mongoose.connect(
      'mongodb://admin:pass@mongo-dev:27017/'
    )
    .then(() => {
      console.log("Connecté à mongodb !");
    })
    .catch((reason) => { 
      console.log("Erreur de connection à la base mongodb :");
      console.log(reason);
  });
  }
}

export default new App().app;