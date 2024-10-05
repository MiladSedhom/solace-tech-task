import { Resolver, Query, Int, Args, ID, Mutation } from '@nestjs/graphql';
import { User } from './user.model';
import { UserService } from './user.service';
import { CreateUserInput } from './create-user.input';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [User])
  users(): User[] {
    return this.userService.getUsers();
  }

  @Query((returns) => User, { nullable: true })
  async user(@Args('id', { type: () => ID }) id: string) {
    return this.userService.getUser(id);
  }

  @Mutation((returns) => User)
  create(createUserInput: CreateUserInput): User {
    return this.userService.createUser(new CreateUserInput());
  }
}
