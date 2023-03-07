import { User } from "../models/User";

export class UserRepository {
	private users: User[];
	private static INSTANCE: UserRepository;

	constructor() {
		this.users = [];
	}

	public static getInstance(): UserRepository {
		if (!this.INSTANCE) {
			this.INSTANCE = new UserRepository();
		}

		return this.INSTANCE;
	}

	create({ username, avatar }: User) {
		const user: User = new User(username, avatar);
		this.users.push(user);
	}

	getLoggedUser(username: string) {
		const loggedUser = this.users.find((user) => user.username === username);

		if (!loggedUser) {
			throw new Error("Não há usuário logado!!");
		}

		return loggedUser;
	}
}
