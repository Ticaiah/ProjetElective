// lib/config/database.ts
import { Sequelize } from "sequelize";

export const postgres = new Sequelize({
  dialect: "postgres",
  host: "postgres",
  username: "cesi",
  password: "cesi2022",
  database: "cesilogiciel"
});