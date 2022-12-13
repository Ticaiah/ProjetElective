// lib/config/database.ts
import { Sequelize } from "sequelize";

export const sqlserver = new Sequelize({
  dialect: "mssql",
  host: "10.0.10.1",
  username: "sa",
  password: "CESU_2024",
  // database: "cyber-frizbee"
});

try {
  sqlserver.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
