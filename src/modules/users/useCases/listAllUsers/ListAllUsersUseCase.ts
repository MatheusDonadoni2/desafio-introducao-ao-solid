import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User[] {
    const userIsAdmin = this.usersRepository.findById(user_id);
    if (!userIsAdmin.admin) {
      const erro = new Error("User does not have admin permission");
      throw erro;
    }
    const users = this.usersRepository.list();
    return users;
  }
}

export { ListAllUsersUseCase };
