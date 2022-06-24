// lib/controllers/nodes.controller.ts
import { Request, Response } from "express";
import { User } from "../models/postgres/user.model";
import jwt from "jsonwebtoken";

export class AuthController {
	public checkJWT(req: Request, res: Response) {

		const token = req.headers["authorization"];
		if (token) {
			const bearer = token.replace(/^Bearer\s+/, "");
			res.sendStatus(User.checkJwt(bearer));
		}
		else
		{
			return res.status(401).json({
				message: "No token provided"
			});
		}
	}

	public async login(req: Request, res: Response) {
		const mail = req.body.mail;
		const password = req.body.password;
		const user = await User.findOne({
			where: {
				mail: mail
			}
		});
		if (!user) {
			return res.status(401).json({
				message: "Invalid credentials"
			});
		}

		// check if password matches
		if (await user.checkPassword(password)) {
			// generate a signed json web token with the contents of user object and return it in the response
			const token = User.generateJWT(user);
			res.json({ token });
		}
		else
		{
			return res.status(401).json({
				message: "Invalid credentials"
			});
		}
	}

	public async register(req: Request, res: Response) {
		const first_name = req.body.first_name;
		const last_name = req.body.last_name;
		const mail = req.body.mail;
		const password = req.body.password;
		const phone_number = req.body.phone_number;
		const address = req.body.address;
		const postcode = req.body.postcode;
		const city = req.body.city;
		const type = "client";
		const [user, created] = await User.findCreateFind({
      where: {
        mail: mail
      },
      defaults: {
        first_name: first_name,
        last_name: last_name,
        mail: mail,
        password: password,
        phone_number: phone_number,
        address: address,
        postcode: postcode,
        city: city,
        type: type,
        is_verified: true
      }
		});
		if (created) {
			// generate a signed json web token with the contents of user object and return it in the response
			const token = User.generateJWT(user);
			res.json({ token });
		}
    else {
      return res.status(401).json({
        message: "User already exists"
      });
    }
	}
}