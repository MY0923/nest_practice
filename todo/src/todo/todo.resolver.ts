import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma.service';
import { Todo } from './todo.model';

@Resolver(() => Todo)
export class TodoResolver {
  constructor(private prisma: PrismaService) {}


  @Query(() => [Todo])
  async read() {
    return this.prisma.todo.findMany();
  }
  

  @Mutation(() => [Todo])
  async createTodo(
    @Args('title') title: string,
    @Args('created_at') created_at: Date,
    @Args('updated_at') updated_at: Date,
    @Args('done') done: boolean,
  ) {
    return this.prisma.todo.create({ data: { title, created_at, updated_at, done } });
  }

  // @Mutation(returns => Todo)
  // async updateTodo(@Args({ name: 'todoId', type: () => Int }) todoId: number) {
  //   return this.prisma.todo.upvoteById({ id: todoId });
  // }
}