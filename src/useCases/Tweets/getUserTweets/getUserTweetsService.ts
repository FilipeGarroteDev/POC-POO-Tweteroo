import { Tweet } from "../../../models/Tweet";
import { TweetsRepository } from "../../../repositories/tweetsRepository";

export default class GetUserTweetsService {
	private tweetsRepository: TweetsRepository;

	constructor(tweetsRepository: TweetsRepository) {
		this.tweetsRepository = tweetsRepository;
	}

	execute(username: string): Tweet[] {
		const tweetsDoUsuario = this.tweetsRepository.getUserTweets(username);

		return tweetsDoUsuario;
	}
}
