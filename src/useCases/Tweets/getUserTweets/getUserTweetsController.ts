import { Request, Response } from "express";
import GetUserTweetsService from "./getUserTweetsService";

export default class GetUserTweetsController {
	private getUserTweetsService: GetUserTweetsService;

	constructor(getUserTweetsService: GetUserTweetsService) {
		this.getUserTweetsService = getUserTweetsService;
	}

	handle(req: Request, res: Response) {
		const { username } = req.params;

		const tweetsDoUsuario = this.getUserTweetsService.execute(username);

		res.status(200).send(tweetsDoUsuario);
	}
}
