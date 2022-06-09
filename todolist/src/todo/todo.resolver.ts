import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { Todo } from 'src/@generated/prisma-nestjs-graphql/todo/todo.model'
import { CreateOneTodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/create-one-todo.args';
import { TodoService } from 'src/todo/todo.service';
import { FindFirstTodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/find-first-todo.args';
import { FindManyTodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/find-many-todo.args';
import { DeleteOneTodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/delete-one-todo.args';
import { UpdateOneTodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/update-one-todo.args';



@Resolver(() => Todo)
export class TodoResolver {
    constructor(private readonly todoService: TodoService) { }

    

    @Query(() => Todo)
    todo(
        @Args() args: FindFirstTodoArgs
    ) {
        return this.todoService.findFirst(args)
    }

    //登録
    @Mutation(() => Todo)
    async createTodo(
        @Args() args: CreateOneTodoArgs
    ) {
        return this.todoService.createTodo(args);
    }

    //参照
    @Query(() => [Todo])
    async readTodo(
        @Args() args: FindManyTodoArgs
    ) {
        return this.todoService.findMany(args);
    }

    //削除
    @Mutation(() => Todo)
    async deleteTodo(
        @Args() args: DeleteOneTodoArgs
    ) {
        return this.todoService.deleteOneTodo(args);
    }

    //更新
    @Mutation(() => Todo)
    async updateTodo(
        @Args() args: UpdateOneTodoArgs
    ) {
        return this.todoService.updateTodo(args);
    }


}
