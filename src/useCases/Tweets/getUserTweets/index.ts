import { TweetsRepository } from "../../../repositories/tweetsRepository";
import GetUserTweetsController from "./getUserTweetsController";
import GetUserTweetsService from "./getUserTweetsService";

const tweetsRepository = TweetsRepository.getInstance();
const getUserTweetsService = new GetUserTweetsService(tweetsRepository);
export const getUserTweetsController = new GetUserTweetsController(
	getUserTweetsService
);
