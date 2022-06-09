// lib/config/routes.ts
import {Request, Response}  from "express";
import {Express}            from "express";
import {NodesController}    from "../controllers/nodes.controller";
import {WS3Controller}      from '../controllers/ws3Controller';
import controller           from '../controllers/commandController';
import userController       from '../controllers/userController';

export class Routes {
  public nodesController: NodesController;
  public ws3Controller: WS3Controller;

  constructor(){
    this.nodesController = new NodesController();
    this.ws3Controller   = new WS3Controller();
  }

  public routes(app:Express): void {
    app.route("/").get(this.nodesController.index);

    app.route("/nodes")
      .get(this.nodesController.index)
      .post(this.nodesController.create);

    app.get('/commands', controller.getCommands);
    app.get('/commands/:id', controller.getCommand);
    app.put('/commands/:id', controller.updateCommand);
    app.delete('/commands/:id', controller.deleteCommand);
    app.post('/commands', controller.addCommand);


//Routes users

    app.get('/users', userController.getUsers);
    app.get('/users/:id', controller.getCommand);
    app.put('/users/:id', controller.updateCommand);
    app.delete('/users/:id', controller.deleteCommand);
    app.post('/users', controller.addCommand);

    app.get('/sensors', this.ws3Controller.test);
    app.get('/allsensors', this.ws3Controller.getAllSensors);
    app.get('/sensors/:id', this.ws3Controller.getSensorByID);

    app.post('/addSensor', this.ws3Controller.addSensor);

  }
}