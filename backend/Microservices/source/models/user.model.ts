// lib/models/user.model.ts
import {Sequelize, Model, DataTypes, BuildOptions} from "sequelize";
import {database} from "../config/database";

export class User extends Model {
  public id!: number;
  public username!: string;
  public phone!: string;
  public email!: string;
}

export interface UserInterface {
  username: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
  },
  {
    tableName: "users",
    sequelize: database, // this bit is important
  }
);

User.sync({alter: true}).then(() => console.log("Users table created"));