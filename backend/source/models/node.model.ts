// lib/models/node.model.ts
import {Sequelize, Model, DataTypes, BuildOptions} from "sequelize";
import {database} from "../config/database";

export class Node extends Model {
  public id!: number;
  public name!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export interface NodeInterface {
  name: string;
}

Node.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    tableName: "nodes",
    sequelize: database, // this bit is important
  }
);

// Node.sync({alter: true}).then(() => console.log("Node table created"));