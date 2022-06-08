import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoWhereUniqueInput } from './todo-where-unique.input';
import { Type } from 'class-transformer';
import { TodoCreateWithoutUsersInput } from './todo-create-without-users.input';

@InputType()
export class TodoCreateOrConnectWithoutUsersInput {

    @Field(() => TodoWhereUniqueInput, {nullable:false})
    @Type(() => TodoWhereUniqueInput)
    where!: TodoWhereUniqueInput;

    @Field(() => TodoCreateWithoutUsersInput, {nullable:false})
    @Type(() => TodoCreateWithoutUsersInput)
    create!: TodoCreateWithoutUsersInput;
}
