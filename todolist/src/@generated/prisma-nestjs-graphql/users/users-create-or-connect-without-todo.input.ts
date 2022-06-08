import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { UsersCreateWithoutTodoInput } from './users-create-without-todo.input';

@InputType()
export class UsersCreateOrConnectWithoutTodoInput {

    @Field(() => UsersWhereUniqueInput, {nullable:false})
    @Type(() => UsersWhereUniqueInput)
    where!: UsersWhereUniqueInput;

    @Field(() => UsersCreateWithoutTodoInput, {nullable:false})
    @Type(() => UsersCreateWithoutTodoInput)
    create!: UsersCreateWithoutTodoInput;
}
