import { UserRepository } from "../../../repositories/usersRepository";
import GetLoggedUser from "./getLoggedUserService";

const userRepository = UserRepository.getInstance();
export const getLoggedUserService = new GetLoggedUser(userRepository);
