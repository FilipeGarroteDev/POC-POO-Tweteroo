import { User } from "../../../models/User";
import { UserRepository } from "../../../repositories/usersRepository";

export default class GetLoggedUser {
	private userRepository: UserRepository;

	constructor(userRepository: UserRepository) {
		this.userRepository = userRepository;
	}

	execute(username: string): User {
		const user = this.userRepository.getLoggedUser(username);
		return user;
	}
}
