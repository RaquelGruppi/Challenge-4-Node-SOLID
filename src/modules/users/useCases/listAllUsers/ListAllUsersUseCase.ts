import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const requestingUser = this.usersRepository.findById(user_id);

    if (!requestingUser) {
      throw new Error("User does not exist");
    }

    if (!requestingUser.admin) {
      throw new Error("User is not an administrator");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
