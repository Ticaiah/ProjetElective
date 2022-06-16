// lib/config/routes.ts
import {Request, Response}  from "express";
import {Express}            from "express";
import {AuthController}     from '../controllers/auth.controller';
export class Routes {
  public authController: AuthController;

  constructor(){
    this.authController   = new AuthController();
  }

  public routes(app:Express): void {
    // Test avec la route auth pour le middleware traefik
    app.route("/auth").get(this.authController.checkJWT);
    // TODO Réaliser la route login
    // app.route("/auth/login").post();
    
  }
}