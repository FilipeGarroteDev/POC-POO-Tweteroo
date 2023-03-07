import { Request, Response } from "express";
import { Tweet } from "../../../models/Tweet";
import GetTweetsService from "./getTweetsService";

export default class GetTweetsController {
	private getTweetsService: GetTweetsService;

	constructor(getTweetsService: GetTweetsService) {
		this.getTweetsService = getTweetsService;
	}

	handle(req: Request, res: Response): Response {
		const page = +req.query.page!;

		if (page && page < 1) {
			return res.status(400).send("Informe uma página válida!");
		}

		const tweets: Tweet[] = this.getTweetsService.execute(page);

		return res.status(200).send(tweets);
	}
}
