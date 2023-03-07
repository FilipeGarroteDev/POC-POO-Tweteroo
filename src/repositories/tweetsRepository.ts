import { Tweet } from "../models/Tweet";

export class TweetsRepository {
	private tweets: Tweet[];
	private static INSTANCE: TweetsRepository;

	constructor() {
		this.tweets = [];
	}

	public static getInstance(): TweetsRepository {
		if (!this.INSTANCE) {
			this.INSTANCE = new TweetsRepository();
		}

		return this.INSTANCE;
	}

	createTweet({ username, avatar, tweet }: Tweet) {
		const newTweet = new Tweet(username, avatar, tweet);
		this.tweets.push(newTweet);
	}
}
