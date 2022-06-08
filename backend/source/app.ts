// lib/app.ts
import morgan from 'morgan';
import helmet from 'helmet';
import express, {Express} from 'express';
import {Routes} from "./config/routes";

class App {
  public app: Express;
  public routePrv: Routes = new Routes();

  constructor() {
    this.app = express();
    this.config();
    this.routePrv.routes(this.app);
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: false}));
    this.app.use(morgan('dev'));
    this.app.use(helmet({
        crossOriginResourcePolicy: false,
    }));
  }
}

export default new App().app;