// lib/app.ts
import morgan from 'morgan';
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
  }
}

export default new App().app;