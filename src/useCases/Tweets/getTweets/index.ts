import { TweetsRepository } from "../../../repositories/tweetsRepository";
import GetTweetsController from "./getTweetsController";
import GetTweetsService from "./getTweetsService";

const tweetsRepository = TweetsRepository.getInstance();
const getTweetsService = new GetTweetsService(tweetsRepository);
export const getTweetsController = new GetTweetsController(getTweetsService);
