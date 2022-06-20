import {Sequelize, Model, DataTypes, BuildOptions} from "sequelize";
import {postgres} from "../../config/postgres";

export class User extends Model {
  public id!: number;
  public first_name!: string;
  public last_name!: string;
  public user_mail!: string;
  public user_login!: string;
  public is_verified!: boolean;
  public user_phone_number!: number;
  public address_id!: number;
  public type!: string ;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

//TODO: Voir pour les parrainnages et les coordonnéess bancaires

User.init({

  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true

  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false

  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false

  },
  user_mail: {
    type: DataTypes.STRING,
    allowNull: false

  },
  user_login: {
    type: DataTypes.STRING,
    allowNull: false

  },
  is_verified: {
    type: DataTypes.BOOLEAN,
    allowNull: false

  },
  user_phone_number: {
    type: DataTypes.INTEGER,
    allowNull: true

  },
   address_id: {
    type: DataTypes.INTEGER,
    allowNull: true

  },
  type: {
    type: DataTypes.ENUM("client","livreur","developpeurTier","restaurateur"),
    allowNull: false

  },
}, {
  tableName: "users",
  sequelize: postgres, 
});

User.sync({force: true}).then(() => console.log("User table created/updated!"));