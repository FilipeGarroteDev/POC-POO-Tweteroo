import express from "express";
import tweetsController from "../useCases/tweets-controller";

const tweetsRouter = express.Router();

tweetsRouter.post("/tweets", tweetsController.postTweet);
tweetsRouter.get("/tweets", tweetsController.getTweets);
tweetsRouter.get("/tweets/:username", tweetsController.getUserTweets);

export default tweetsRouter;
