import argon2 from "argon2";
import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { postgres } from "../../config/postgres";
import jwt from "jsonwebtoken";

export class User extends Model {
	public id!: number;
	public first_name!: string;
	public last_name!: string;
	public mail!: string;
	public password!: string;
	public is_verified!: boolean;
	public phone_number!: number;
	public address!: string;
	public type!: string;
	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;

	public checkPassword(password:string): Promise<boolean> {
		// compare password with hashed password
		return argon2.verify(this.password, password, { type: argon2.argon2id });
	}

	public static hashPassword(password:string): Promise<string> {
		// hash password with argon2id
		return argon2.hash(password, { type: argon2.argon2id });
	}

	public static generateJWT(user:User): string {
		// generate a signed json web token with the contents of user object and return it in the response
		return jwt.sign({ id: user.id, login: user.mail, type: user.type }, "TEST", { expiresIn: "1h" });
	}

	public static checkJwt(token:string): number {
		// check if jwt is valid
		try {
			console.log(token);
			const decoded = jwt.verify(token, "TEST");
		}
		catch (e) {
			if (e instanceof jwt.JsonWebTokenError) {
				// if the error thrown is because the JWT is unauthorized, return a 401 error
				console.log(e)
				return 401;
			}
			// otherwise, return a bad request error
			return 400;
		}
		return 200;
	}
};

//TODO: Voir pour les parrainnages et les coordonnéess bancaires

User.init(
	{
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
		mail: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate:{
				isEmail: true
			}
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false

		},
		is_verified: {
			type: DataTypes.BOOLEAN,
			allowNull: false

		},
		phone_number: {
			type: DataTypes.INTEGER,
			allowNull: true

		},
		address: {
			type: DataTypes.STRING,
			allowNull: true

		},
		type: {
			type: DataTypes.ENUM("client", "livreur", "developpeurTier", "restaurateur"),
			allowNull: false

		},
	},
	{
		hooks: {
			beforeCreate: async (user) => {
				if (user.password) {
					user.password = await User.hashPassword(user.password);
				}
			},
			beforeUpdate: async (user) => {
				if (user.password) {
					user.password = await User.hashPassword(user.password);
				}
			}
		},
		tableName: "users",
		sequelize: postgres,
	});

User.sync({ force: true }).then(() => console.log("User table created/updated!"));