import express from "express";
import { getTweetsController } from "../useCases/Tweets/getTweets";
import { getUserTweetsController } from "../useCases/Tweets/getUserTweets";
import { postTweetsController } from "../useCases/Tweets/postTweet";

const tweetsRouter = express.Router();

tweetsRouter.post("/tweets", (req, res) =>
	postTweetsController.create(req, res)
);
tweetsRouter.get("/tweets", (req, res) => getTweetsController.handle(req, res));
tweetsRouter.get("/tweets/:username", (req, res) =>
	getUserTweetsController.handle(req, res)
);

export default tweetsRouter;
