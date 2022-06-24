// lib/config/database.ts
import { Sequelize } from "sequelize";

export const postgres = new Sequelize({
  dialect: "postgres",
  host: "postgres",
  username: "cesi",
  password: "cesi2022",
  database: "cesilogiciel"
});

try {
  postgres.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
