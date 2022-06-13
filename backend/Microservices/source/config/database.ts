// lib/config/database.ts
import {Sequelize} from "sequelize";

export const database = new Sequelize({
  dialect: "postgres",
  host: "postgres",
  username: "cesi",
  password: "cesi2022",
  database: "cesilogiciel"
});
