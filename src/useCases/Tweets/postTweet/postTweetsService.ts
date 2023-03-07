import { TweetsRepository } from "../../../repositories/tweetsRepository";
import { getLoggedUserService } from "../../Users/getLoggedUser";

export default class PostTweetService {
	private tweetsRepository: TweetsRepository;

	constructor(tweetsRepository: TweetsRepository) {
		this.tweetsRepository = tweetsRepository;
	}

	execute(tweet: string, username: string): void {
		if (!username || !tweet) {
			throw new Error("Todos os campos são obrigatórios!");
		}

		const { avatar } = getLoggedUserService.execute(username);

		this.tweetsRepository.createTweet({ username, tweet, avatar });
	}
}
