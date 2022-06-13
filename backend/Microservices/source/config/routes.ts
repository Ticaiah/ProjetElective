import {Express} from "express";
import {NodesController} from "../controllers/nodes.controller";
import {CommandsController} from '../controllers/commands.controller';
import {UsersController} from '../controllers/users.controller';


export class Routes {
  public nodesController: NodesController = new NodesController();
  public usersController: UsersController = new UsersController();
  public commandsController: CommandsController = new CommandsController();

  public routes(app:Express): void {
    app.route("/").get(this.nodesController.index);

    app.route("/nodes")
      .get(this.nodesController.index)
      .post(this.nodesController.create);

    app.route("/commands")
      .get(this.commandsController.getCommands)
      .post(this.commandsController.addCommand)

    app.route("/commands/:id")
      .get(this.commandsController.getCommand)
      .put(this.commandsController.updateCommand)
      .delete(this.commandsController.deleteCommand)

//Routes users

    app.route('/users')
      .get(this.usersController.getUsers)
  }
}