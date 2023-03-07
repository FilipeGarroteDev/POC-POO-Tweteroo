import { TweetsRepository } from "../../../repositories/tweetsRepository";

export default class GetTweetsService {
	private tweetsRepository: TweetsRepository;

	constructor(tweetsRepository: TweetsRepository) {
		this.tweetsRepository = tweetsRepository;
	}

	execute(page: number) {
		const limite = 10;
		const start = (page - 1) * limite;
		const end = page * limite;

		const tweetsList = this.tweetsRepository.getAllTweets(start, end);

		return tweetsList;
	}
}
