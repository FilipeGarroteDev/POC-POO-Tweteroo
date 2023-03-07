import express from "express";
import { getTweetsController } from "../useCases/Tweets/getTweets";
import { postTweetsController } from "../useCases/Tweets/postTweet";

const tweetsRouter = express.Router();

tweetsRouter.post("/tweets", (req, res) =>
	postTweetsController.create(req, res)
);
tweetsRouter.get("/tweets", (req, res) => getTweetsController.handle(req, res));
// tweetsRouter.get("/tweets/:username", tweetsController.getUserTweets);

export default tweetsRouter;
