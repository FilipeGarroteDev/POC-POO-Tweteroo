import { Request, Response } from "express";
import PostTweetService from "./postTweetsService";

export default class PostTweetsController {
	private postTweetsService: PostTweetService;

	constructor(postTweetsService: PostTweetService) {
		this.postTweetsService = postTweetsService;
	}

	create(req: Request, res: Response) {
		const { tweet, username } = req.body;

		this.postTweetsService.execute(tweet, username);

		res.status(201).send("OK, seu tweet foi criado");
	}
}
