import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Todo } from 'src/@generated/prisma-nestjs-graphql/todo/todo.model'
import { FindFirstTodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/find-first-todo.args';
import { CreateOneTodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/create-one-todo.args';
import { FindUniqueTodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/find-unique-todo.args';
import { FindManyTodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/find-many-todo.args';
import { DeleteOneTodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/delete-one-todo.args';
import { UpdateManyTodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/update-many-todo.args';
import { UpdateOneTodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/update-one-todo.args';

@Injectable()
export class TodoService {
    constructor(private readonly prisma: PrismaService) {}

    async findFirst(args: FindFirstTodoArgs): Promise<Todo | null> {
        return this.prisma.todo.findFirst(args);
    }

    async findUnique(args: FindUniqueTodoArgs): Promise<Todo | null> {
        return this.prisma.todo.findUnique(args);
    }

    //作成
    async createTodo(args: CreateOneTodoArgs): Promise<Todo> {
        return this.prisma.todo.create(args);
    }
    //参照
    async findMany(args: FindManyTodoArgs): Promise<Todo[]> {
        return this.prisma.todo.findMany(args);
    }
    //削除
    async deleteOneTodo(args: DeleteOneTodoArgs): Promise<Todo> {
        return this.prisma.todo.delete(args);
    }

    //更新
    async updateTodo(args: UpdateOneTodoArgs): Promise<Todo> {
        return this.prisma.todo.update(args);
    }
}