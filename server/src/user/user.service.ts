import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { data } from 'src/data';
import { CreateUserInput } from './create-user.input';

@Injectable()
export class UserService {
  getUsers(): User[] {
    return data.users;
  }

  getUser(id: string): User | undefined {
    return data.users.find((user) => user.id === id);
  }

  createUser(newUser: CreateUserInput): User {
    //logic for creating an actual user
    return data.users[1];
  }
}
