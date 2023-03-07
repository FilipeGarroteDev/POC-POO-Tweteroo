import express from "express";
import { postTweetsController } from "../useCases/Tweets/postTweet";

const tweetsRouter = express.Router();

tweetsRouter.post("/tweets", (req, res) =>
	postTweetsController.create(req, res)
);
// tweetsRouter.get("/tweets", tweetsController.getTweets);
// tweetsRouter.get("/tweets/:username", tweetsController.getUserTweets);

export default tweetsRouter;
