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

	getAllTweets(start: number, end: number): Tweet[] {
		if (this.tweets.length <= 10) {
			return this.reverseTweets();
		}
		return this.reverseTweets().slice(start, end);
	}

	reverseTweets() {
		return [...this.tweets].reverse();
	}
}
