import { TweetsRepository } from "../../../repositories/tweetsRepository";
import PostTweetsController from "./postTweetController";
import PostTweetService from "./postTweetsService";

const tweetsRepository = TweetsRepository.getInstance();
const postTweetsService = new PostTweetService(tweetsRepository);
export const postTweetsController = new PostTweetsController(postTweetsService);
