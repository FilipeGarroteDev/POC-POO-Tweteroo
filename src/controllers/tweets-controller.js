import usersController from "./users-controller.js";

class TweetsController {
	constructor() {
		this.tweetsList = [];
		this.postTweet = this.postTweet.bind(this);
		// this.getTweets = this.getTweets.bind(this);
		// this.getUserTweets = this.getUserTweets.bind(this);
		// this.reverseTweets = this.reverseTweets.bind(this);
	}

	postTweet(req, res) {
		const { tweet, username } = req.body;

		if (!username || !tweet) {
			return res.status(400).send("Todos os campos são obrigatórios!");
		}

		const { avatar } = usersController.getLoggedUser(username);

		this.tweetsList.push({ username, tweet, avatar });

		res.status(201).send("OK, seu tweet foi criado");
	}

	// getTweets(req,res) {

	// }

	// getUserTweets(req,res){

	// }

	// reverseTweets(req,res){

	// }
}

// app.get("/tweets/:username", (req, res) => {
// 	const { username } = req.params;

// 	const tweetsDoUsuario = tweets.filter((t) => t.username === username);

// 	res.status(200).send(tweetsDoUsuario);
// });

// app.get("/tweets", (req, res) => {
// 	const { page } = req.query;

// 	if (page && page < 1) {
// 		res.status(400).send("Informe uma página válida!");
// 		return;
// 	}
// 	const limite = 10;
// 	const start = (page - 1) * limite;
// 	const end = page * limite;

// 	if (tweets.length <= 10) {
// 		return res.send(reverseTweets());
// 	}

// 	res.status(200).send([...tweets].reverse().slice(start, end));
// });

// function reverseTweets() {
// 	return [...tweets].reverse();
// }

export default new TweetsController();
