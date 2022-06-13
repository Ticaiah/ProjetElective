import {Express} from "express";
import {NodesController} from "../controllers/nodes.controller";

import controller from '../controllers/commandController';
import userController from '../controllers/userController';

export class Routes {
  public nodesController: NodesController = new NodesController();

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
  }
}