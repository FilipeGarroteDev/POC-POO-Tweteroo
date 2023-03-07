import { Request, Response } from "express";
import CreateUserService from "./createUserService";

export default class CreateUserController {
	private createUserService: CreateUserService;

	constructor(createUserService: CreateUserService) {
		this.createUserService = createUserService;
	}

	handle(req: Request, res: Response): Response {
		const { username, avatar } = req.body;

		this.createUserService.execute(username, avatar);

		return res.status(201).send("OK deu tudo certo");
	}
}
