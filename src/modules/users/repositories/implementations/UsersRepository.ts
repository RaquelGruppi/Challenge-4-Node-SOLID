import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User({
      name,
      email,
      updated_at: new Date(),
    });

    this.users.push(user);

    return user;
  }

  findById(id: string): User | undefined {
    return this.users.find((_user) => _user.id === id);
  }

  findByEmail(email: string): User | undefined {
    return this.users.find((_user) => _user.email === email);
  }

  turnAdmin(receivedUser: User): User {
    const user = this.users.find((_user) => _user.id === receivedUser.id);

    Object.assign(user, { admin: true, updated_at: new Date() });

    return user;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
