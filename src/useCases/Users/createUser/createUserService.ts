import { UserRepository } from "../../../repositories/usersRepository";

export default class CreateUserService {
	private userRepository: UserRepository;

	constructor(userRepository: UserRepository) {
		this.userRepository = userRepository;
	}

	execute(username: string, avatar: string) {
		if (!username || !avatar) {
			throw new Error("Deu ruim no cadastro!");
		}

		this.userRepository.create({ username, avatar });
	}
}
