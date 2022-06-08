import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersUpdateWithoutTodoInput } from './users-update-without-todo.input';
import { Type } from 'class-transformer';
import { UsersCreateWithoutTodoInput } from './users-create-without-todo.input';

@InputType()
export class UsersUpsertWithoutTodoInput {

    @Field(() => UsersUpdateWithoutTodoInput, {nullable:false})
    @Type(() => UsersUpdateWithoutTodoInput)
    update!: UsersUpdateWithoutTodoInput;

    @Field(() => UsersCreateWithoutTodoInput, {nullable:false})
    @Type(() => UsersCreateWithoutTodoInput)
    create!: UsersCreateWithoutTodoInput;
}
