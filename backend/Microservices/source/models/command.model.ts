// lib/models/command.model.ts
import {Sequelize, Model, DataTypes, BuildOptions} from "sequelize";
import {database} from "../config/database";

export class Command extends Model {
  public id!: number;
  public readonly createdAt!: Date;
}

export interface CommandInterface {
  id: string;
  createdAt: Date;
}

Command.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    tableName: "commands",
    sequelize: database, // this bit is important
  }
);

Command.sync({alter: true}).then(() => console.log("Commands table created"));